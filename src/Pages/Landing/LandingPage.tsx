import { useState } from "react";
import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import NavScroll from "../../components/ProgressBar";
import SelectedWork from "../../components/ScrollablePages/Projects"
// import Home from "../../components/ScrollablePages/Home/index";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardCenter, setCardCenter] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  

  return (
      <Perspective menuOpen={menuOpen}>
          <OuterNavContainer menuOpen={menuOpen} />
        <Container menuOpen={menuOpen} onClick={closeMenu}>
            <Wrapper>
              <Navbar toggleMenu={toggleMenu} />
              <NavScroll />
              <SelectedWork /> 
             {/* <Home /> */}
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
