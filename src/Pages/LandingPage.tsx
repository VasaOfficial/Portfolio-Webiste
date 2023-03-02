import styled from "styled-components";

import Navbar from "../components/Navigation/Navbar";
import Home from "../components/ScrollablePages/Home/index";
import NavScroll from "../components/ProgressBar";

// Whole page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 95%;
  width: 90%;
  position: relative;
  padding-top: 100px;
`
function LandingPage() {
  return (
      <Container>
          <Wrapper>
            <Navbar />
            <NavScroll />
            <Home />
          </Wrapper>
      </Container>
  )
}

export default LandingPage;
