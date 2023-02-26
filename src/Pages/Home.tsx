import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
`

function Home() {
  return (
    <Wrapper>
      <Navbar />
      </Wrapper>
  )
}

export default Home;
