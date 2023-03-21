import { useState, useEffect } from "react";
import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";

import Navbar from "../components/Navigation/Navbar/Navbar";
import NavScroll from "../components/ProgressBar";
import Home from "../components/ScrollablePages/Home/index";
import Projects from "../components/ScrollablePages/Projects"
import Contact from "../components/ScrollablePages/Contact";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFromButton, setActiveFromButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Home button function
  const contactBtnClick = () => {
    const section1 = document.getElementById("section-1");
    const section3 = document.getElementById("section-3");

    if (section1 !== null) {
      section1.classList.remove("is-active");
    }
    if (section3 !== null) {
      section3.classList.add("is-active");
    }
    setActiveFromButton(true);
    setCurrentIndex(2);
  };  
  
  // changing pages on scroll
  useEffect(() => {
    const sections = [document.getElementById("section-1"), document.getElementById("section-2"), document.getElementById("section-3")];
  
    const handleWheel = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);
      const nextIndex = (currentIndex + delta + sections.length) % sections.length;
    
      const section1 = document.getElementById("section-1");
      const section3 = document.getElementById("section-3");
    
      if (section1?.classList.contains("is-active") && delta === -1) {
        // Do not allow scrolling up on section-1
        setCurrentIndex(0);
        return;
      } if (section3?.classList.contains("is-active") && delta === 1) {
        // Do not allow scrolling down on section-3
        setCurrentIndex(2);
        return;
      }
    
      sections[currentIndex]?.classList.remove("is-active");
      sections[nextIndex]?.classList.add("is-active");
    
      setCurrentIndex(nextIndex);
      if (delta === -1) {
        setActiveFromButton(false);
      }
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
  }, [currentIndex]);
  
  // opening/closing navbar menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const handleOuterLiClick = (index: number) => {
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById('section-2');
    const section3 = document.getElementById("section-3");
  
    if (index === 0 && section1 !== null) {
      section1.classList.add("is-active");
      section2?.classList.remove('is-active');
      section3?.classList.remove("is-active");
      setCurrentIndex(0);
    } else if (index === 1 && section2 !== null) {
      section1?.classList.remove("is-active");
      section3?.classList.remove("is-active");
      section2.classList.add('is-active');
      setCurrentIndex(1);
    } else if (index === 2 && section3 !== null) {
      section1?.classList.remove("is-active");
      section2?.classList.remove('is-active');
      section3.classList.add("is-active");
      setCurrentIndex(2);
    }
  };  

  return (
      <Perspective menuOpen={menuOpen}>
          <OuterNavContainer menuOpen={menuOpen} />
        <Container menuOpen={menuOpen} onClick={closeMenu}>
            <Wrapper>
              <Navbar toggleMenu={toggleMenu} />
              <NavScroll
                activeFromButton={activeFromButton}
                setActiveFromButton={setActiveFromButton}
                activeIndex={currentIndex}
                setActiveIndex={setCurrentIndex}
              />
              <Home  contactBtnClick={contactBtnClick}/> 
              <Projects /> 
              <Contact /> 
            </Wrapper>
        </Container>
        <OuterNav menuOpen={menuOpen}>
          <OuterLi menuOpen={menuOpen} onClick={() => handleOuterLiClick(0)}>Home</OuterLi>
          <OuterLi menuOpen={menuOpen} onClick={() => handleOuterLiClick(1)}>Projects</OuterLi>
          <OuterLi menuOpen={menuOpen} onClick={() => handleOuterLiClick(2)}>Contact</OuterLi>
        </OuterNav>
      </Perspective>
  )
}

export default LandingPage;