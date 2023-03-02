import { SideNavContainer, SideNav } from './styles';

function NavScroll() {
  return (
    <SideNavContainer>
      <SideNav>
        <li className="is-active">
          <span>Home</span>
        </li>
        <li>
          <span>Works</span>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
        <li>
          <span>Hire us</span>
        </li>
      </SideNav>
    </SideNavContainer>
  );
}

export default NavScroll;

// Change li and span elements into a styled-components, make a feature on-click event to add 'is-active' to elements when clicked but only on one
