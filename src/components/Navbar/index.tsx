import styled from "styled-components";

import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'

const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-align: center;
  box-pack: center;
  background-color: #101119;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const MenuContainer = styled.nav`
  font-size: 24px;
  color: #000;
  cursor: pointer;
  padding: 10px;
`;

const SideNav = styled.ul`
  display: none;
`

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer><img src={logo} alt="Logo" style={{ width: "95px", height: '95px' }} /></LogoContainer>
      <MenuContainer><img src={menuIcon} alt="Menu Icon" style={{ width: "30px", height: '30px' }} />
        <SideNav>
        <li className="is-active"><span>Home</span></li>
                <li><span>Works</span></li>
                <li><span>About</span></li>
                <li><span>Contact</span></li>
                <li><span>Hire us</span></li>
        </SideNav>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
