import styled from "styled-components";

const SideNavContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;
  box-align: center;

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
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
  height: 70%;
  width: 100px;
  max-height: 750px;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-position: inside;
  z-index: 10;

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li.is-active {
    color: whitesmoke;
    transition: color .4s ease-in-out;
  }

  .side-nav>li {
    position: relative;
    top: -5px;
    color: #fff;
    font-size: 6px;
    cursor: pointer;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  
`

function ProgressBar() {
  return (
    <SideNavContainer>
      <SideNav>
        <li><span>Home</span></li>
        <li><span>Projects</span></li>
        <li><span>Technologies</span></li>
        <li><span>Contact</span></li>
      </SideNav>
    </SideNavContainer>
  )
}

export default ProgressBar;