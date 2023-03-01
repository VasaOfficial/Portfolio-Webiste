import styled from "styled-components";

const NavMenu = styled.ul`
  display: none;
`

function Menu() {
  return (
    <NavMenu>
      <li className="is-active">Home</li>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
        <li>Hire us</li>
    </NavMenu>
  )
}

export default Menu;