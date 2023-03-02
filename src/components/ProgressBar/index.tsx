import styled from "styled-components";

const SideNavContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 70%;
    max-height: 750px;
    background-color: #555;
    opacity: .35;
    z-index: 10;
  }
`
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

  li {
    position: relative;
    top: -100px;
    color: #fff;
    cursor: pointer;
    font-size: 10px;
    opacity: 0.2;
    transition: font-size .4s ease-in-out, opacity .4s ease-in-out;
  }

  span {
    position: relative;
    left: 10px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
  }
  
  :before {
    position: absolute;
    top: 3px;
    left: 10px;
    color: #555;
    font-size: 18px;
    font-weight: 800;
  }
    
    li.is-active {
    color: #eab308;
    opacity: 1;
    transition: color .4s ease-in-out;

    span {
      opacity: 1;
      visibility: visible;
      font-size: 18px;
      color: white;
      transition: opacity .4s ease-in-out;
    }
    
    &::before {
      left: -33px;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
    }
  }
`

function NavScroll() {
  return (
    <SideNavContainer>
      <SideNav>
        <li className="is-active"><span>Home</span></li>
        <li><span>Works</span></li>
        <li><span>About</span></li>
        <li><span>Contact</span></li>
        <li><span>Hire us</span></li>
      </SideNav>
    </SideNavContainer>
  )
}

export default NavScroll;