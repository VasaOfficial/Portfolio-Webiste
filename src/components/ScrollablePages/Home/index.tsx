import styled from "styled-components";
import Augustus from '../../../assets/augustus.png'

const Section = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
`;

const Intro = styled.div`
  display: flex;
  max-width: 85%;
  width: 55%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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
`;

const Title = styled.h1`
  position: relative;
  font-size: 68px;
  font-weight: 900;
  line-height: 1;
  z-index: 1;
  margin-top: -150px;
  line-height: 1.5em;
`;

const Button = styled.button`
  position: relative;
  padding: 5px 17px 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  height: 650px;
  bottom: 21px;
  right: 0;
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
    color: gray;
    transition: color .2s ease-in-out;

    :hover {
      color: white;
    }
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
    <Section>
      <Intro>
        <IntroBanner>
          <Title>Hello<br />My name is<br />Vasilije</Title>
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