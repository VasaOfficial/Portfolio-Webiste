import styled from "styled-components";

import Navbar from "../components/Navbar";
import Home from "../components/ScrollablePages/Home/index";

const Perspective = styled.div`
  position: relative
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Container = styled.div`
  position: relative
  transform: translateZ(0) translateX(0) rotateY(0deg);
  min-height: 100%;
  outline: 30px solid white; 
  transition: transform .4s;
`

const OuterNavReturn = styled.div`
  position: absolute
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
  display: none;
  cursor: pointer;
  z-index: 11;

  is-vis {
    display: block;
  }
`

const Viewport = styled.div`
  l-viewport {
    position: relative;
    width: 100%;
    height: 100vh;
    box-shadow: 0 0 45px 5px rgba(0,0,0,.85);
    overflow: hidden;
  }
`

const Wrapper = styled.div`
  position: relative
  width: 1440px;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
`

const MainContent = styled.ul`
  position: relative
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`

function LandingPage() {
  return (
    <Perspective className="effect-rotate-left">
      <Container>
        <OuterNavReturn>
          <Viewport id="l-viewport">
            <Wrapper>
              <Navbar />
              <MainContent id="l-main-content">
                <Home />
              </MainContent>
              </Wrapper>
          </Viewport>
        </OuterNavReturn>
      </Container>
    </Perspective>
  )
}

export default LandingPage;
