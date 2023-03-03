import { useState } from "react";
import { SideNavContainer, SideNav, ListItem, ListItemTitle } from "./styles";

interface NavItem {
  label: string;
  id: string;
}

function NavScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "works", label: "Works" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "hire-us", label: "Hire us" },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

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

//  add feature to change pages with scroll