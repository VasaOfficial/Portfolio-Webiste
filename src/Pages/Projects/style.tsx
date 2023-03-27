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

export const Section = styled.li`
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
  width: 1200px;
  max-width: 80%;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 80px;

  @media only screen and (max-width: 1180px) {
    max-width: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  margin: 0 0 100px 0;
  font-size: 30px;
  text-align: center;
  pointer-events: none;
`;

export const ProjectLockup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-90px);
`;

export const Slider = styled.ul<{ slideAnimation: boolean }>`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0;
  list-style: none;
  justify-content: center;
  animation: ${props => props.slideAnimation ? slideAnimation : "none"} 1s ease-in-out;
`;

export const SliderItem = styled.li`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 300px;
height: 400px;
margin: 0 10px;

  &.left,
  &.right {
    img {
      width: 200px;
      height: 200px;
    }
  }

  &.center {
    padding-top: 100px;

    a {
      color: #fff;
    }

    img {
      width: 300px;
      height: 300px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 1300px) {
    &.left,
    &.right {
      img {
        width: 150px;
        height: 150px;
      }
    }

    &.center {
      img {
        width: 250px;
        height: 250px;
      }
    }
  }

  @media (max-width: 850px) {
    &.left, &.right {
      img {
        width: 90px;
        height: 90px;
      }
    }

    &.center {
      img {
        width: 190px;
        height: 190px;
      }
    }
  }

  @media (max-width: 700px) {
    &.left, &.right {
      display: none;
    }
  }

  @media (max-width: 400px) {
    &.center {
      img {
        width: 150px;
        height: 150px;
      }
    }
`;

export const SliderItemContainer = styled.div`
  color: #whitesmoke;
`;

export const SliderItemImage = styled.div`
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    border: 0;
    border-radius: 50%;
  }
`;

export const SliderItemTitle = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SliderItemDescription = styled.p<{ parentClass: string }>`
  display: ${(props) => (props.parentClass === "center" ? "block" : "none")};
  max-width: 250px;
  margin: 0 auto;
  margin-bottom: 10px;
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

  img {
    width: 20px;
    fill: #fff;
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

  img {
    width: 20px;
    fill: #fff;
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