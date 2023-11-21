import { useState} from 'react' 
import { useTransition, animated } from '@react-spring/web';
import { Section, ProjectContainer, ProjectTitle, ProjectLockup, Slider, SliderItemImage, SliderItemDescription, SliderItemTitle, SliderNext, SliderPrev, ProjectLink } from './style'
import rightArrow from '../../assets/Projects/left.png'
import leftArrow from '../../assets/Projects/right.png'
import EarthSensor from '../../assets/Projects/EarthSensor.jpg'
import Moleraj from '../../assets/Projects/moleraj.png'
import Movie from '../../assets/Projects/movie.png'

type Project = {
  title: string;
  image: string;
  description: string;
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'MolerajBeograd',
    image: `${Moleraj}`,
    description: 'Painting company landing page with admin dashboard and reviews feature.',
    live: 'https://moleraj-beograd.vercel.app/',
    github: 'https://github.com/VasaOfficial/',
  },
  {
    title: 'EarthSensor',
    image: `${EarthSensor}`,
    description: 'Find out the air quality and weather of a city near you.',
    live: 'https://earth-sensor.vercel.app/',
    github: 'https://github.com/VasaOfficial/EarthSensor',
  },
  {
    title: 'MovieLibrary',
    image: `${Movie}`,
    description: 'Search for Movies or Tv Shows suggestions with AI.',
    live: 'https://movie-library-ten.vercel.app/',
    github: 'https://github.com/VasaOfficial/MovieLibrary',
  },
]

function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<string>('prev');

  const transitions = useTransition(projects[activeIndex], {
    from: {
      opacity: 0,
      transform: slideDirection === 'prev' ? 'translateX(-100%)' : 'translateX(100%)',
    },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: {
      opacity: 0,
      transform: slideDirection === 'prev' ? 'translateX(100%)' : 'translateX(-100%)',
    },
  });

  const handleSliderPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setSlideDirection('next');
  };

  const handleSliderNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection('prev');
  };

  return (
    <Section id='section-2'>
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectLockup>
          <Slider>
            {transitions((style, item) => (
              <animated.div
                style={{
                  ...style,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '500px',
                  height: '600px',
                  margin: '0 10px',
                  position: 'absolute',
                }}
              >
                  <SliderItemImage>
                    <img src={item.image} alt={item.title} />
                  </SliderItemImage>
                  <SliderItemTitle>{item.title}</SliderItemTitle>
                  <SliderItemDescription parentClass='center'>
                    {item.description}
                  </SliderItemDescription>
                {activeIndex === projects.indexOf(item) && (
                  <>
                    <ProjectLink href={item.live} target='_blank'>
                      live demo
                    </ProjectLink>
                    <ProjectLink href={item.github} target='_blank'>
                      view on github
                    </ProjectLink>
                  </>
                )}
              </animated.div>
            ))}
          </Slider>
          <SliderPrev onClick={handleSliderPrev}>
            <img src={leftArrow} alt='left' />
          </SliderPrev>
          <SliderNext onClick={handleSliderNext}>
            <img src={rightArrow} alt='right' />
          </SliderNext>
        </ProjectLockup>
      </ProjectContainer>
    </Section>
  );
}

export default Projects;