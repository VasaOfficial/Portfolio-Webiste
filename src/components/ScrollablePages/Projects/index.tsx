import { useState } from 'react' 

import { Section, ProjectContainer, ProjectTitle, ProjectLockup, Slider, SliderItem, SliderItemLink, SliderItemImage, SliderItemDescription, SliderItemTitle, SliderNext, SliderPrev } from './style'
import rightArrow from '../../../assets/Projects/left.png'
import leftArrow from '../../../assets/Projects/right.png'
import leftP from '../../../assets/Projects/leftP.jpg'
import rightP from '../../../assets/Projects/rightP.jpg'
import centerP from '../../../assets/Projects/centerP.jpg'

type Project = {
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    image: `${leftP}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
  },
  {
    title: 'Project 2',
    image: `${centerP}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
  },
  {
    title: 'Project 3',
    image: `${rightP}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
  },
]

function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleSliderPrev = () => {
    setActiveIndex(activeIndex === 0 ? projects.length - 1 : activeIndex - 1)
  }

  const handleSliderNext = () => {
    setActiveIndex(activeIndex === projects.length - 1 ? 0 : activeIndex + 1)
  }

  const getSliderItemClass = (index: number) => {
    const middleIndex = Math.floor(projects.length / 2)
    if (index === activeIndex) {
      return 'center'
    }
    if (index < activeIndex) {
      return index >= middleIndex ? 'left' : 'right'
    }
    return index <= middleIndex ? 'right' : 'left'
  }

  const handleSliderItemClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <Section className="is-active">
      <ProjectContainer>
        <ProjectTitle>Selected Projects</ProjectTitle>
        <ProjectLockup>
        <Slider>
            {projects.map((project, index) => (
              <SliderItem
                className={getSliderItemClass(index)}
                key={project.title}
                onClick={() => handleSliderItemClick(index)}
              >
                <SliderItemLink href="#0">
                  <SliderItemImage>
                    <img src={project.image} alt={project.title} />
                  </SliderItemImage>
                  <SliderItemTitle>{project.title}</SliderItemTitle>
                  <SliderItemDescription>{project.description}</SliderItemDescription>
                </SliderItemLink>
              </SliderItem>
            ))}
          </Slider>
          <SliderPrev onClick={handleSliderPrev}><img src={leftArrow} alt='left' /></SliderPrev>
          <SliderNext onClick={handleSliderNext}><img src={rightArrow} alt='right' /></SliderNext>
        </ProjectLockup>
      </ProjectContainer>
    </Section>
  )
}

export default SelectedWork;
