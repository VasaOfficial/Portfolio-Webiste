import { useEffect } from "react";
import styled from 'styled-components';

const SideNavContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;

  :before {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 70%;
    max-height: 750px;
    background-color: #555;
    opacity: 0.50;
    z-index: 10;
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

const SideNav = styled.ul`
  position: relative;
  display: flex;
  width: 100px;
  height: 70%;
  max-height: 750px;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-position: inside;
  z-index: 10;
`;

const ListItem = styled.li`
  position: relative;
  top: -100px;
  color: #fff;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.4;
  transition: font-size 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &.is-active {
    color: #eab308;
    opacity: 1;
    transition: color 0.4s ease-in-out;

    span {
      opacity: 1;
      visibility: visible;
      font-size: 18px;
      color: white;
      transition: opacity 0.4s ease-in-out, font-size 0.4s ease-in-out, color 0.4s ease-in-out;
    }

    &::before {
      left: -33px;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
    }
  }
`;

const ListItemTitle = styled.span`
  position: relative;
  left: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  transition: font-size 0.4s ease-in-out, color 0.4s ease-in-out;
`;

interface NavItem {
  label: string;
  id: string;
}

interface NavScrollProps {
  activeFromButton: boolean;
  setActiveFromButton: (value: boolean) => void;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}

function NavScroll({ activeFromButton, setActiveFromButton, activeIndex, setActiveIndex }: NavScrollProps) {

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  const addActiveClass = (index: number) => {
    const section = document.getElementById(`section-${index + 1}`);
    section?.classList.add("is-active");
  };

  // changes the pages on click based on the name
  const removeActiveClass = () => {
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");
    const section3 = document.getElementById("section-3");
  
    section1?.classList.remove("is-active");
    section2?.classList.remove("is-active");
    section3?.classList.remove("is-active");
  };
  
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    removeActiveClass();
  
    switch (navItems[index].id) {
      case "home":
        addActiveClass(0);
        break;
      case "projects":
        addActiveClass(1);
        break;
      case "contact":
        addActiveClass(2);
        break;
      default:
        break;
    }

    if (activeFromButton) {
      setActiveFromButton(false);
    }
  };  

  // changes the pages on wheel scroll
  useEffect(() => {
    const handleWindowWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setActiveIndex(Math.min(activeIndex + 1, navItems.length - 1));
      } else if (event.deltaY < 0) {
        setActiveIndex(Math.max(activeIndex - 1, 0));
      }
    };
  
    window.addEventListener('wheel', handleWindowWheel);
  
    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [activeIndex, navItems.length, setActiveIndex]);
  
  return (
    <SideNavContainer>
      <SideNav>
        {navItems.map(({ id, label }, index) => (
          <ListItem
            key={id}
            className={activeIndex === index && !activeFromButton || (activeFromButton && id === 'contact') ? "is-active" : ""}
            onClick={() => handleItemClick(index)}
          >
            <ListItemTitle>{label}</ListItemTitle>
          </ListItem>
        ))}
      </SideNav>
    </SideNavContainer>
  );
}

export default NavScroll;
