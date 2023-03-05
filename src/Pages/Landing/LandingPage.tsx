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
          <OuterNavContainer menuOpen={menuOpen} />
        <Container menuOpen={menuOpen}>
            <Wrapper>
              <Navbar toggleMenu={toggleMenu} />
              <NavScroll />
              <Home />
            </Wrapper>
        </Container>
        <OuterNav menuOpen={menuOpen}>
          <OuterLi menuOpen={menuOpen}>Home</OuterLi>
          <OuterLi menuOpen={menuOpen}>Works</OuterLi>
          <OuterLi menuOpen={menuOpen}>About</OuterLi>
          <OuterLi menuOpen={menuOpen}>Contact</OuterLi>
          <OuterLi menuOpen={menuOpen}>Hire-us</OuterLi>
        </OuterNav>
      </Perspective>
  )
}

export default LandingPage;
