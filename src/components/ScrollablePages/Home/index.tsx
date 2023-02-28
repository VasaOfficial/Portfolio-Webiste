import styled from "styled-components";
import Augustus from '../../../assets/augustus.png'

const Section = styled.li``;

const Intro = styled.div``;

const IntroBanner = styled.div``;

const Title = styled.h1``;

const Button = styled.button``;

const Img = styled.img`
  height: 650px;
`;

function Home() {
  return (
    <Section className={`l-section section--is-active `}>
      <Intro>
        <IntroBanner>
          <Title>Your next<br />interactive<br />experience</Title>
          <Button>Contact</Button>
          <Img src={Augustus} />
        </IntroBanner>
      </Intro>
    </Section>
  )
}

export default Home;