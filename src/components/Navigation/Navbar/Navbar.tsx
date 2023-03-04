import { NavbarContainer, LogoContainer, MenuContainer } from './styles';

import menuIcon from '../../../assets/menu.png'
import logo from '../../../assets/logo1.png'

function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer><img src={logo} alt="Logo" /></LogoContainer>
      <MenuContainer><img src={menuIcon} alt="Menu Icon" />
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
