import styled from "styled-components";

import Navbar from "../components/Navbar";
import Home from "../components/ScrollablePages/Home/index";

const PerspectiveEffectRotateLeft = styled.div`
  
`
const Container = styled.div`
`

const OuterNavReturn = styled.div`
`

const Viewport = styled.div`
`

const Wrapper = styled.div`
`

const MainContent = styled.ul`
`

function LandingPage() {
  return (
    <PerspectiveEffectRotateLeft>
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
    </PerspectiveEffectRotateLeft>
  )
}

export default LandingPage;
