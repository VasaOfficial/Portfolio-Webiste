import styled from "styled-components";
import Augustus from '../../../assets/Home/augustus.png'

const Section = styled.li`
  position: absolute;
  list-style: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0s 0.4s;

  &.is-active {
    opacity: 1;
    visibility: visible;
    transition: opacity .4s ease-in-out .4s;
    width: 100%;
    height: 100%;
    list-style: none;
  }
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
  font-weight: 1000;
  line-height: 1;
  z-index: 1;
  margin-top: -150px;
  line-height: 1.4em;
`;

const Button = styled.button`
  position: relative;
  padding: 5px 17px 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: white;
  cursor: pointer;
  color: #ffa260;
  transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #eab308;
    transform: translateY(-0.25em);
    color: #eab308;
  }
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

  div {
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

  const handleClick = () => {
    const section1 = document.getElementById("section-1");
    const section3 = document.getElementById("section-3");
    if (section1 !== null) {
      section1.classList.remove("is-active");
    }
    if (section3 !== null) {
      section3.classList.add("is-active");
    }
  };
  

  return (
    <Section className="is-active" id="section-1">
      <Intro>
        <IntroBanner>
          <Title>Hello<br />I&apos;m Vasa<br /></Title>
          <Button onClick={handleClick}>Contact</Button>
          <Img src={Augustus} />
        </IntroBanner>
        <IntroOptions>
          <div>
            <h3>Lorem ipsum</h3>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit
               sed do.
             </p>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                sed do.
              </p>
          </div>
          <div>
             <h3>Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  sed do.
                </p>
          </div>
        </IntroOptions>
      </Intro>
    </Section>
  )
}

export default Home;