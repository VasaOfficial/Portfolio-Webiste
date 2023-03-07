import styled from 'styled-components';

import rightArrow from '../../../assets/Projects/left.png'
import leftArrow from '../../../assets/Projects/right.png'
import leftP from '../../../assets/Projects/leftP.jpg'
import rightP from '../../../assets/Projects/rightP.jpg'
import centerP from '../../../assets/Projects/centerP.jpg'

const Section = styled.li`
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s ease-in-out, visibility 0s .4s;
  position: absolute;
  width: 100%;
  height: 100%;

  &.is-active {
    display: none;
    opacity: 1;
    visibility: visible;
    z-index: 1;
    transition: opacity .4s ease-in-out .4s;
  }
`;

const Work = styled.div`
  position: relative;
  display: flex;
  width: 960px;
  max-width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const WorkTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 30px;
  text-align: center;
`;

const WorkLockup = styled.div`
  position: relative;
`;

const Slider = styled.ul`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

const SliderItem = styled.li`
  position: absolute;
  display: none;
  text-align: center;

  &.left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
  }

  &.right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: block;
  }

  &.center {
    position: relative
    top: 30px
    left: 50%
    transform: translateX(-50%)
    display: block

    a {
      color: #fff;
    }
  }
`;

const SliderItemLink = styled.a`
  text-decoration: none;
  color: #858585;
`;

const SliderItemImage = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const SliderItemTitle = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const SliderItemDescription = styled.p`
  display: none;
  max-width: 250px;
  margin: 0 auto;
`;

const SliderPrev = styled.div`
  position: absolute;
  top: 160px;
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
    width: 20px
    fill: #fff;
  }
`;

const SliderNext = styled.div`
  position: absolute;
  top: 160px;
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
    width: 20px
    fill: #fff;
  }
`;

function SelectedWork() {
  return (
    <Section className="is-active">
      <Work className="work">
        <WorkTitle>Selected work</WorkTitle>
        <WorkLockup>
          <Slider>
            <SliderItem className="left">
              <SliderItemLink href="#0">
                <SliderItemImage>
                  <img src={leftP} alt="Victory" />
                </SliderItemImage>
                <SliderItemTitle>Victory</SliderItemTitle>
                <SliderItemDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
            <SliderItem className="center">
              <SliderItemLink href="#0">
                <SliderItemImage>
                  <img src={centerP} alt="Metiew and Smith" />
                </SliderItemImage>
                <SliderItemTitle>Metiew &amp; Smith</SliderItemTitle>
                <SliderItemDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
            <SliderItem className="right">
              <SliderItemLink href="#0">
                <SliderItemImage>
                  <img src={rightP} alt="Alex Nowak" />
                </SliderItemImage>
                <SliderItemTitle>Alex Nowak</SliderItemTitle>
                <SliderItemDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
          </Slider>
          <SliderPrev><img src={leftArrow} alt='left' /></SliderPrev>
          <SliderNext><img src={rightArrow} alt='right' /></SliderNext>
        </WorkLockup>
      </Work>
    </Section>
  )
}

export default SelectedWork;
