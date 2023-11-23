import styled, { keyframes } from "styled-components";
import float1 from '../../assets/float1.png'
import float2 from '../../assets/float2.png'
import float3 from '../../assets/float3.png'

const shine = keyframes`
  0% {
    background-position: -600px; /* Start off-screen to the left */
  }
  100% {
    background-position: 1200px; /* Move twice the width of the gradient to the right */
  }
`;

const Section = styled.div`
  position: absolute;
  list-style: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0s 0.4s;
  margin-top: 80px;

  &.is-active {
    opacity: 1;
    visibility: visible;
    transition: opacity .4s ease-in-out .4s;
    width: 100%;
    height: 100%;
    list-style: none;
    margin-top: 80px;
  }
`;

const Intro = styled.div`
  display: flex;
  max-width: 85%;
  width: 65%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const IntroBanner = styled.div`
  position: relative;
  height: 475px;
  display: flex;
  gap: 30px;

  :before {
    content: "";
    position: absolute;
    bottom: 20px;
    left: -15px;
    right: 0;
    height: 2px;
    background-color: #636363;
  }

  @media (max-width: 1000px) {
    height: 350px;
  }

  @media (max-width: 500px) {
    height: 475px;
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 64px;
  font-weight: 1000;
  line-height: 1;
  z-index: 1;
  margin-top: -150px;
  line-height: 1.4em;
  background: linear-gradient(
    to right,
    #eab308 0,
    #eab308 10%,
    hsl(0, 0%, 30%) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 10s infinite linear;
  
  @media (max-width: 1000px) {
    font-size: 48px;
  }

  @media (max-width: 720px) {
    font-size: 42px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
    padding-top: 20px;
  }
`;

const Description = styled.p`
  color: whitesmoke;
  font-size: 20px;
  line-height: 2;
  max-width: 600px;

  @media (max-width: 1000px) {
    font-size: 16px;
    max-width: 400px;
  }

  @media (max-width: 720px) {
    font-size: 14px;
  }
`;


const Button = styled.button`
  position: relative;
  padding: 5px 17px 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffa260;
  transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin-top: 20px;
  padding: 1em 2em;
  margin-right: 20px;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #eab308;
    transform: translateY(-0.25em);
    color: #eab308;
  }
`;

const Tools = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: flex-start;

  div {
    max-width: 250px;
    text-decoration: none;
    color: gray;
    transition: color .2s ease-in-out;
    color: white;

    @media (max-width: 400px) {
      padding: 8px;
    }

    @media (max-width: 500px) {
      padding: 10px;
    }
  }

  h3 {
    font-size: 16px;
    text-transform: uppercase;
    text-align: left;

    @media (max-width: 400px) {
      font-size: 12px;
      margin-top: 0px;
    }
  }

  ul {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;

    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

const TechnologyCategory = styled.h2`
  color: #ffa260;
`;

const Technology = styled.ul`
  color: whitesmoke;
  font-size: 1.1rem;
`;


type HomeProps = {
  contactBtnClick: () => void;
};

function Home({ contactBtnClick}: HomeProps) {
  return (
    <Section className="is-active" id="section-1" >
      <Intro>
        <IntroBanner>
          <div>
            <Title>Hello<br />My name is Vasa<br /></Title>
            <Description>
              I am web developer,<br />
              I have a strong passion for coding and a deep-rooted love for all things related to computers and technology.
              Check out my projects in the section below and contact me if you are interested in working with me.
            </Description>
            <Button onClick={contactBtnClick}>Contact</Button>
            <Button>Resume</Button>
          </div>
          <div className="float-cont">
            <div className="float-img">
              <img src={float1} alt="floating statue part 1" />
            </div>
            <div className="float-img-oposite">
              <img src={float2} alt="floating statue part 2" />
            </div>
            <div className="float-img">
              <img src={float3} alt="floating statue part 3" />
            </div>
          </div>
        </IntroBanner>
        <Tools>
          <div>
            <TechnologyCategory>Frontend</TechnologyCategory>
            <Technology>
              <li>HTML5/CSS3</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
            </Technology>
          </div>
          <div>
            <TechnologyCategory>Backend</TechnologyCategory>
            <Technology>
              <li>Node.js</li>
              <li>Express</li>
            </Technology>
          </div>
          <div>
            <TechnologyCategory>Tools</TechnologyCategory>
            <Technology>
              <li>Vite</li>
              <li>Tailwind</li>
              <li>Redux</li>
            </Technology>
          </div>
        </Tools>
      </Intro>
    </Section>
  )
}

export default Home;