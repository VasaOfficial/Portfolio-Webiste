import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 #eab308; }
`;

export const slideAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Section = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s ease-in-out, visibility 0s .4s;
  position: absolute;
  width: 100%;
  height: 100%;
  list-style: none;

  &.is-active {
    opacity: 1;
    visibility: visible;
    z-index: 1;
    transition: opacity .4s ease-in-out .4s;
    list-style: none;
  }
`;

export const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  max-width: 80%;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 80px;

  @media only screen and (max-width: 400px) {
    padding-top: 0px;
  }
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 5rem;
  font-size: 30px;
  text-align: center;
  pointer-events: none;
  color: #ffa260;

  @media only screen and (max-width: 400px) {
    margin-bottom: 1rem;
  }
`;

export const ProjectLockup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-90px);
`;

export const Slider = styled.ul`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0;
  list-style: none;
  justify-content: center;

  @media only screen and (max-width: 400px) {
    margin-top: 0px;
  }
`;

export const SliderItemImage = styled.div`
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    border: 0;

    @media only screen and (max-width: 950px) {
      width: 85%;
      border: 0;
      bottom: 100px;
    }

    @media only screen and (max-width: 500px) {
      width: 70%;
      border: 0;
      bottom: 100px;
    }
  }

  @media only screen and (max-width: 400px) {
    margin-top: 2rem;
  }
`;

export const SliderItemTitle = styled.p`
  font-size: 30px;
  font-weight: 800;
  color: #eab308;

  @media only screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

export const SliderItemDescription = styled.p<{ parentClass: string }>`
  display: ${(props) => (props.parentClass === "center" ? "block" : "none")};
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 20px;

  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const SliderPrev = styled.div`
  position: absolute;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  border-radius: 50%;
  right: 0;
  cursor: pointer;
  bottom: -200px;

  img {
    width: 20px;
    fill: #fff;
  }

  @media only screen and (max-width: 950px) {
    bottom: -310px;
    right: -20px
  }

  @media only screen and (max-width: 400px) {
    bottom: -370px;
  }
`;

export const SliderNext = styled.div`
  position: absolute;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  border-radius: 50%;
  left: 0;
  cursor: pointer;
  bottom: -200px;

  img {
    width: 20px;
    fill: #fff;
  }

  @media only screen and (max-width: 950px) {
    bottom: -310px;
    left: -20px
  }

  @media only screen and (max-width: 400px) {
    bottom: -370px;
  }
`;

export const ProjectLink = styled.a`
  position: relative;
  padding: 10px 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffa260 !important;
  transition: 0.25s;
  background: none;
  border: 2px solid #ffa260;
  font: inherit;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    animation: ${pulseAnimation} 1s;
    box-shadow: 0 0 0 2em transparent;
    color: #eab308;
    cursor: pointer;
  }
`;