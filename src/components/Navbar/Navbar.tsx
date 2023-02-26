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

const IconContainer = styled.div`
  font-size: 24px;
  color: #000;
  cursor: pointer;
  padding: 10px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer><img src={logo} alt="Logo" style={{ width: "95px", height: '95px' }} /></LogoContainer>
      <IconContainer><img src={menuIcon} alt="Menu Icon" style={{ width: "30px", height: '30px' }} /></IconContainer>
    </NavbarContainer>
  );
};

export default Navbar;
