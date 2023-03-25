import { useState, useEffect } from 'react' 

import { Section, ProjectContainer, ProjectTitle, ProjectLockup, Slider, SliderItem, SliderItemContainer, SliderItemImage, SliderItemDescription, SliderItemTitle, SliderNext, SliderPrev, ProjectLink } from './style'
import rightArrow from '../../assets/Projects/left.png'
import leftArrow from '../../assets/Projects/right.png'
import noImage from '../../assets/Projects/Image.jpg'

type Project = {
  title: string;
  image: string;
  description: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    image: `${noImage}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
    live: 'https://project1.live',
    github: 'https://github.com/project1',
  },
  {
    title: 'Project 2',
    image: `${noImage}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
    live: 'https://project2.live',
    github: 'https://github.com/project2',
  },
  {
    title: 'Project 3',
    image: `${noImage}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.',
    live: 'https://project3.live',
    github: 'https://github.com/project1',
  },
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [sliderPosition] = useState<number>(1);
  const [slideAnimation, setSlideAnimation] = useState(false);

  const handleSliderPrev = () => {
    setActiveIndex(activeIndex === 0 ? projects.length - 1 : activeIndex - 1)
    const lastProject = projects[projects.length - 1]
    const newProjects = [ lastProject, ...projects.slice(0, projects.length - 1),
    ]
    projects.splice(0, projects.length, ...newProjects)
  }

  const handleSliderNext = () => {
    setActiveIndex(activeIndex === projects.length - 1 ? 0 : activeIndex + 1)
    const firstProject = projects[0]
    const newProjects = [ ...projects.slice(1, projects.length),
      firstProject,
    ]
    projects.splice(0, projects.length, ...newProjects)
  }

  useEffect(() => {
    setSlideAnimation(true);
    setTimeout(() => setSlideAnimation(false), 1000);
  }, [activeIndex]);

  const getSliderItemClass = (index: number) => {
    if (index === 0) {
      return 'left';
    } if (index === projects.length - 1) {
      return 'right';
    } 
      return 'center';
  };

  return (
    <Section id='section-2'>
      <ProjectContainer>
        <ProjectTitle>Selected Projects</ProjectTitle>
        <ProjectLockup>
        <Slider slideAnimation={slideAnimation}>
            {projects.map((project, index) => (
              <SliderItem
                className={getSliderItemClass(index)}
                key={project.title}
              >
                <SliderItemContainer >
                  <SliderItemImage>
                    <img src={project.image} alt={project.title} />
                  </SliderItemImage>
                  <SliderItemTitle>{project.title}</SliderItemTitle>
                  <SliderItemDescription parentClass={sliderPosition === index ? "center" : ""}>{project.description}</SliderItemDescription>
                </SliderItemContainer>
                {sliderPosition === index && (
                  <>
                    <ProjectLink href={project.live} target="_blank">live demo</ProjectLink>
                    <ProjectLink href={project.github} target="_blank">view on github</ProjectLink>
                  </>)}
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

export default Projects;
