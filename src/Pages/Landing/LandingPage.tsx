import { useState, useEffect } from "react";
import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import NavScroll from "../../components/ProgressBar";
import Home from "../../components/ScrollablePages/Home/index";
import Projects from "../../components/ScrollablePages/Projects"
import Contact from "../../components/ScrollablePages/Contact";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // changing pages on scroll
  useEffect(() => {
    const sections = [
      document.getElementById("section-1"),
      document.getElementById("section-2"),
      document.getElementById("section-3"),
    ];
  
    let currentIndex = 0;
  
    const handleWheel = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);
      sections[currentIndex]?.classList.remove("is-active");
    
      if (currentIndex === 2 && delta === 1) {
        // Do not allow scrolling down on section-3
        currentIndex = 2;
      } else if (currentIndex === 0 && delta === -1) {
        // Do not allow scrolling up on section-1
        currentIndex = 0;
      } else {
        currentIndex = (currentIndex + delta + sections.length) % sections.length;
      }
    
      sections[currentIndex]?.classList.add("is-active");
    };
    
    sections[currentIndex]?.classList.add("is-active");
    sections.forEach((section) => {
      section?.addEventListener("wheel", handleWheel);
    });
  
    return () => {
      sections.forEach((section) => {
        section?.removeEventListener("wheel", handleWheel);
      });
    };
  }, []);
  
  // opening/closing navbar menu
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
              <Home /> 
              <Projects /> 
              <Contact /> 
            </Wrapper>
        </Container>
        <OuterNav menuOpen={menuOpen}>
          <OuterLi menuOpen={menuOpen}>Home</OuterLi>
          <OuterLi menuOpen={menuOpen}>Projects</OuterLi>
          <OuterLi menuOpen={menuOpen}>Contact</OuterLi>
        </OuterNav>
      </Perspective>
  )
}

export default LandingPage;