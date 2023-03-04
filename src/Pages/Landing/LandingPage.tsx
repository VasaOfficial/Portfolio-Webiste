import { Perspective, Container, Wrapper, OuterNavContainer, OuterNav, OuterLi } from "./styles";

import Navbar from "../../components/Navigation/Navbar/Navbar";
import Home from "../../components/ScrollablePages/Home/index";
import NavScroll from "../../components/ProgressBar";

function LandingPage() {

  return (
      <Perspective>
          <OuterNavContainer />
        <Container>
            <Wrapper>
              <Navbar />
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
