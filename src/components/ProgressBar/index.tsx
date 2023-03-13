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
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <SideNavContainer>
      <SideNav>
      {navItems.map(({ id, label }, index) => (
          <ListItem
            key={id}
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <ListItemTitle>{label}</ListItemTitle>
          </ListItem>
        ))}
      </SideNav>
    </SideNavContainer>
  );
}

export default NavScroll;
