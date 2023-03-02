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
    top: 50%;
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
    top: -5px;
    color: #fff;
    font-size: 6px;
    cursor: pointer;
  }

  span {
    position: relative;
    top: 3px;
    left: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    opacity: 0;
    visibility: hidden;
  }
  
  :before {
    position: absolute;
    top: 3px;
    left: 10px;
    color: #555;
    font-size: 14px;
    font-weight: 300;
  }

  li:nth-child(1)::before {
    content: "01";
    }
    
    li:nth-child(2)::before {
    content: "02";
    }
    
    li:nth-child(3)::before {
    content: "03";
    }
    
    li:nth-child(4)::before {
    content: "04";
    }
    
    li:nth-child(5)::before {
    content: "05";
    }
    
    li.is-active {
    color: #0f33ff;
    transition: color .4s ease-in-out;

    span {
      opacity: 1;
      visibility: visible;
      transition: opacity .4s ease-in-out;
    }
    
    &::before {
      left: -33px;
      color: #fff;
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