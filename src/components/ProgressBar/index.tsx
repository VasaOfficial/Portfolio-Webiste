import { useState, useEffect } from "react";
import { SideNavContainer, SideNav, ListItem, ListItemTitle } from "./styles";

interface NavItem {
  label: string;
  id: string;
}

function NavScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleWindowWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setActiveIndex(Math.min(activeIndex + 1, navItems.length - 1));
      } else if (event.deltaY < 0) {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      }
    };
  
    window.addEventListener('wheel', handleWindowWheel);
  
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [activeIndex, navItems.length]);
  

  return (
    <SideNavContainer>
      <SideNav>
        {navItems.map(({ id, label }, index) => (
          <ListItem
            key={id}
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => handleItemClick(index)}
          >
            <ListItemTitle>{label}</ListItemTitle>
          </ListItem>
        ))}
      </SideNav>
    </SideNavContainer>
  );
}

export default NavScroll;
