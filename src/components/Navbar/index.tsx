import styled from "styled-components";
import menuIcon from '../../assets/Nav/menu.png'
import logo from '../../assets/Nav/logo.png'

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  max-width: 90%;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  z-index: 2;
`;

const LogoContainer = styled.div`
  color: #000;

  img {
    width: 115px; 
    height: 115px;
  }
`;

const MenuContainer = styled.nav`
  color: #000;
  cursor: pointer;
  padding: 10px;
  border: 3px solid transparent;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    border: 3px solid white;
    border-radius: 5px;
  }
`;

type NavbarProps = {
  toggleMenu: () => void;
};

function Navbar({ toggleMenu }: NavbarProps) {
  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <NavbarContainer>
      <LogoContainer><img src={logo} alt="Logo" /></LogoContainer>
      <MenuContainer onClick={handleMenuClick}><img src={menuIcon} alt="Menu Icon" /></MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;