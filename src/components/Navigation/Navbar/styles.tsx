import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  max-width: 85%;
  width: 85%;
  height: 70px;
  background-color: #0c0c0c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;

  img {
    width: 130px; 
    height: 130px;
  }
`;

export const MenuContainer = styled.nav`
  font-size: 24px;
  color: #000;
  cursor: pointer;
  padding: 10px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const SideNav = styled.ul`
  display: none;
`