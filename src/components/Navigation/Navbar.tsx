import styled from "styled-components";

import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  max-width: 85%;
  width: 85%;
  height: 70px;
  background-color: #101119;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px
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
