import styled from "styled-components";
import Augustus from '../../../assets/augustus.png'

const Section = styled.li`
  position: absolute;
  width: 100%;
  height: 100%;

  l-section {
    opacity: 0;
    visibility: hidden;
    transition: opacity .4s ease-in-out, visibility 0s .4s;
  }

  section-is-active {
    opacity: 1;
    visibility: visible;
    z-index: 1;
    transition: opacity .4s ease-in-out .4s;
  }

  next {
    transform: translateY(-45px);
    transition: transform .4s ease-in-out;
  }

  prev {
    transform: translateY(45px);
    transition: transform .4s ease-in-out;
  }
`;

const Intro = styled.div`
  position: relative;
  display: flex;
  width: 900px;
  max-width: 75%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1180px)
    max-width: 100%;
`;

const IntroBanner = styled.div`
  position: relative;
  height: 475px;

  :before {
    content: "";
    position: absolute;
    bottom: 20px;
    left: -15px;
    right: 0;
    height: 2px;
    background-color: #282828;
  }

  :after {
    content: "";
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 30px;
    height: 4px;
    background-color: #0f33ff;
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 68px;
  font-weight: 900;
  line-height: 1;
  z-index: 1;
`;

const Button = styled.button`
  position: relative;
  padding: 5px 17px 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: white;
  border: none;
`;

const Img = styled.img`
  position: absolute;
  height: 300px;
  bottom: 21px;
  right: -12px;
`;

const IntroOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    max-width: 250px;
    text-decoration: none;
    color: $muted-gray;
    transition: color .2s ease-in-out;
  }

  :hover {
    color: $white;
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 0;
  }
`;

function Home() {
  return (
    <Section className={`l-section section-is-active `}>
      <Intro>
        <IntroBanner>
          <Title>Your next<br />interactive<br />experience</Title>
          <Button>Contact</Button>
          <Img src={Augustus} />
        </IntroBanner>
        <IntroOptions>
          <a href="#0">
            <h3>Metiew &amp; Smith</h3>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit
               sed do.
             </p>
          </a>
          <a href="#0">
            <h3>Fantasy interactive</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                sed do.
              </p>
          </a>
          <a href="#0">
             <h3>Paul &amp; shark</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  sed do.
                </p>
          </a>
        </IntroOptions>
      </Intro>
    </Section>
  )
}

export default Home;