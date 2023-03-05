import styled from 'styled-components';

const Section = styled.li`
  &.l-section {
    // styles for the "l-section" class
  }
`;

const Work = styled.div`
  // styles for the "work" class
`;

const WorkTitle = styled.h2`
  // styles for the work title
`;

const WorkLockup = styled.div`
  // styles for the work lockup
`;

const Slider = styled.ul`
  // styles for the slider
`;

const SliderItem = styled.li`
  // styles for the slider item
`;

const SliderItemLink = styled.a`
  // styles for the slider item link
`;

const SliderItemImage = styled.div`
  // styles for the slider item image
`;

const SliderItemTitle = styled.p`
  // styles for the slider item title
`;

const SliderItemDescription = styled.p`
  // styles for the slider item description
`;

const SliderPrev = styled.div`
  // styles for the slider previous button
`;

const SliderNext = styled.div`
  // styles for the slider next button
`;

function SelectedWork() {
  return (
    <Section className="l-section section">
      <Work className="work">
        <WorkTitle>Selected work</WorkTitle>
        <WorkLockup className="work--lockup">
          <Slider className="slider">
            <SliderItem className="slider--item slider--item-left">
              <SliderItemLink href="#0">
                <SliderItemImage className="slider--item-image">
                  <img src="assets/img/work-victory.jpg" alt="Victory" />
                </SliderItemImage>
                <SliderItemTitle className="slider--item-title">Victory</SliderItemTitle>
                <SliderItemDescription className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
            <SliderItem className="slider--item slider--item-center">
              <SliderItemLink href="#0">
                <SliderItemImage className="slider--item-image">
                  <img src="assets/img/work-metiew-smith.jpg" alt="Metiew and Smith" />
                </SliderItemImage>
                <SliderItemTitle className="slider--item-title">Metiew &amp; Smith</SliderItemTitle>
                <SliderItemDescription className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
            <SliderItem className="slider--item slider--item-right">
              <SliderItemLink href="#0">
                <SliderItemImage className="slider--item-image">
                  <img src="assets/img/work-alex-nowak.jpg" alt="Alex Nowak" />
                </SliderItemImage>
                <SliderItemTitle className="slider--item-title">Alex Nowak</SliderItemTitle>
                <SliderItemDescription className="slider--item-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
                </SliderItemDescription>
              </SliderItemLink>
            </SliderItem>
          </Slider>
          <SliderPrev className="slider--prev">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 150 118"
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path d="" />
              </g>
            </svg>
          </SliderPrev>
          <SliderNext className="slider--next">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 150 118"
              xmlSpace="preserve"
            >
              <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                <path d="" />
              </g>
            </svg>
          </SliderNext>
        </WorkLockup>
      </Work>
    </Section>
  )
}

export default SelectedWork;
