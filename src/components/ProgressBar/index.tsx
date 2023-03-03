import { useState } from "react";
import { SideNavContainer, SideNav, ListItem, ListItemTitle } from "./styles";

function NavScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SideNavContainer>
      <SideNav>
      <ListItem className={activeIndex === 0 ? "is-active" : ""} onClick={() => setActiveIndex(0)}>
          <ListItemTitle>Home</ListItemTitle>
        </ListItem>
        <ListItem className={activeIndex === 1 ? "is-active" : ""} onClick={() => setActiveIndex(1)}>
          <ListItemTitle>Works</ListItemTitle>
        </ListItem>
        <ListItem className={activeIndex === 2 ? "is-active" : ""} onClick={() => setActiveIndex(2)}>
          <ListItemTitle>About</ListItemTitle>
        </ListItem>
        <ListItem className={activeIndex === 3 ? "is-active" : ""} onClick={() => setActiveIndex(3)}>
          <ListItemTitle>Contact</ListItemTitle>
        </ListItem>
        <ListItem className={activeIndex === 4 ? "is-active" : ""} onClick={() => setActiveIndex(4)}>
          <ListItemTitle>Hire us</ListItemTitle>
        </ListItem>
      </SideNav>
    </SideNavContainer>
  );
}

export default NavScroll;

// refactor this code so that it doesnt repeat itself, add smother animation when switching pages