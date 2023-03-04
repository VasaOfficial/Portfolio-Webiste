import { useState } from "react";
import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Home from "../../components/ScrollablePages/Home/index";
import NavScroll from "../../components/ProgressBar";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <Perspective menuOpen={menuOpen}>
          <OuterNavContainer />
        <Container menuOpen={menuOpen}>
            <Wrapper>
              <Navbar toggleMenu={toggleMenu} />
              <NavScroll />
              <Home />
            </Wrapper>
        </Container>
        <OuterNav>
          <OuterLi>Home</OuterLi>
          <OuterLi>Works</OuterLi>
          <OuterLi>About</OuterLi>
          <OuterLi>Contact</OuterLi>
          <OuterLi>Hire-us</OuterLi>
        </OuterNav>
      </Perspective>
  )
}

export default LandingPage;
