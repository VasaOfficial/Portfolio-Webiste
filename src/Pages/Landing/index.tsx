import { useState, useEffect, useCallback} from "react";
import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";
import Navbar from "../../components/Navbar";
import NavScroll from "../../components/ProgressBar";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFromButton, setActiveFromButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const contactBtnClick = () => {
    const section1 = document.getElementById("section-1");
    const section3 = document.getElementById("section-3");

    section1?.classList.remove('is-active')
    section3?.classList.add('is-active')

    setActiveFromButton(true);
    setCurrentIndex(2);
  };  
  
  // changing pages on scroll
  useEffect(() => {
    const sections = [document.getElementById("section-1"), document.getElementById("section-2"), document.getElementById("section-3")];
  
    const handleWheel = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);
      const nextIndex = (currentIndex + delta + sections.length) % sections.length;
    
      if (currentIndex === 0 && delta === -1) {
        setCurrentIndex(0);
        return;
      } if (currentIndex === 2 && delta === 1) {
        setCurrentIndex(2);
        return;
      }      
    
      sections[currentIndex]?.classList.remove("is-active");
      sections[nextIndex]?.classList.add("is-active");
    
      setCurrentIndex(nextIndex);
      setActiveFromButton(false);
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

  // changes section when clicked on nav menu text
  const handleOuterLiClick = useCallback(
    (index: number) => {
      const section1 = document.getElementById("section-1");
      const section2 = document.getElementById("section-2");
      const section3 = document.getElementById("section-3");

      section1?.classList.remove("is-active");
      section2?.classList.remove("is-active");
      section3?.classList.remove("is-active");

      switch (index) {
        case 0:
          section1?.classList.add("is-active");
          setCurrentIndex(0);
          break;
        case 1:
          section2?.classList.add("is-active");
          setCurrentIndex(1);
          break;
        case 2:
          section3?.classList.add("is-active");
          setCurrentIndex(2);
          break;
        default:
          break;
      }
    },
    [setCurrentIndex]
  );

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
          <OuterLi menuOpen={menuOpen} onClick={() => { handleOuterLiClick(0); setMenuOpen(false);}} currentIndex={currentIndex}>Home</OuterLi>
          <OuterLi menuOpen={menuOpen} onClick={() => { handleOuterLiClick(1); setMenuOpen(false);}} currentIndex={currentIndex}>Projects</OuterLi>
          <OuterLi menuOpen={menuOpen} onClick={() => { handleOuterLiClick(2); setMenuOpen(false);}} currentIndex={currentIndex}>Contact</OuterLi>
        </OuterNav>
      </Perspective>
  )
}

export default LandingPage;