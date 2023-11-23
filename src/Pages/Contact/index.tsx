/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import sculpture1 from '../../assets/sculpture1.png';
import sculpture2 from '../../assets/sculpture2.png';
import sculpture3 from '../../assets/sculpture3.png';

const Section = styled.div`
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out, visibility 0s 0.4s;

  &.is-active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.4s ease-in-out 0.4s;
    list-style: none;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 50px;
`;

const FloatImgBig = styled.div`
  flex: 1;
  position: absolute;

  &.top {
    top: -180px;
    margin-right: 120px;
  }

  &.left {
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    img {
      width: 65%;
      height: 65%;
    }
  }

  &.right {
    top: 40%;
    right: 150px;
    transform: translateY(-50%);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 24px;

  a {
    color: #ffa260;
    text-decoration: none;
    margin: 10px;
    display: block;
    font-size: 20px;

    &:hover {
      color: #eab308;
    }
  }

  p {
    margin-top: 10px;
    color: #d3d3d3;
  }
`;

const Title = styled.h1`
  color: #ffa260;
`;

function Contact() {
  return (
    <Section id="section-3">
      <ImageContainer>
        <FloatImgBig className="float-img-slow top">
          <img src={sculpture1} alt="floating statue 1" />
        </FloatImgBig>
        <FloatImgBig className="float-img-medium left">
          <img src={sculpture2} alt="floating statue 2" />
        </FloatImgBig>
        <FloatImgBig className="float-img-fast right">
          <img src={sculpture3} alt="floating statue 3" />
        </FloatImgBig>
      </ImageContainer>
      <TextContainer>
        <Title>My Contacts</Title>
        <a href="mailto:VasaPofficial@gmail.com"><FaEnvelope /> VasaPofficial@gmail.com</a>
        <p>+381 65 258 370 6</p>
        <a href="https://www.linkedin.com/in/vasilijepleskonjicofficial/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/VasaOfficial" target="_blank" rel="noopener noreferrer"><FaGithub /> GITHUB</a>
      </TextContainer>
    </Section>
  );
}

export default Contact;
