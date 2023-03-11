import styled from "styled-components";

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
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 100px;
`;

export const ProjectTitle = styled.h2`
  margin: 0 0 50px 0;
  font-size: 30px;
  text-align: center;
`;

export const ProjectLockup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.ul`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  justify-content: center;
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

  &.left {
    img {
      width: 150px;
      height: 150px;
    }
  }

  &.right {
    img {
      width: 150px;
      height: 150px;
    }
  }

  &.center {
    a {
      color: #fff;
    }

    img {
      width: 300px;
      height: 300px;
    }

    p {
      font-size: 18px;
      padding-top 10px;
    }
`;

export const SliderItemLink = styled.a`
  text-decoration: none;
  color: #858585;
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
  cursor: pointer;
  right: 0;

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
  cursor: pointer;
  left: 0;

  img {
    width: 20px;
    fill: #fff;
  }
`;