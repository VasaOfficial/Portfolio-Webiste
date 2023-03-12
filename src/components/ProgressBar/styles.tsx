import styled from 'styled-components';

export const SideNavContainer = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;

  :before {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    width: 2px;
    height: 70%;
    max-height: 750px;
    background-color: #555;
    opacity: 0.50;
    z-index: 10;
  }
`;

export const SideNav = styled.ul`
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
`;

export const ListItem = styled.li`
  position: relative;
  top: -100px;
  color: #fff;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.4;
  transition: font-size 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &.is-active {
    color: #eab308;
    opacity: 1;
    transition: color 0.4s ease-in-out;

    span {
      opacity: 1;
      visibility: visible;
      font-size: 18px;
      color: white;
      transition: opacity 0.4s ease-in-out, font-size 0.4s ease-in-out, color 0.4s ease-in-out;
    }

    &::before {
      left: -33px;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
    }
  }
`;

export const ListItemTitle = styled.span`
  position: relative;
  left: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  transition: font-size 0.4s ease-in-out, color 0.4s ease-in-out;
`;
