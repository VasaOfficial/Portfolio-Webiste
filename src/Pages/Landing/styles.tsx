import styled from "styled-components";

export const Perspective = styled.div<{ menuOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ menuOpen }) => menuOpen && `
  position: fixed;
  perspective: 1500px;
`}
`

export const Container = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding-left: 60px;
  transform: translateZ(0) translateX(0) rotateY(0deg);
  min-height: 100%;
  transition: transform .4s;

  ${({ menuOpen }) => menuOpen && `
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    transform-origin: 0% 50%;
    transition: transform .4s;
    transform: translateZ(-1800px) translateX(-50%) rotateY(45deg);
    box-shadow: 0 0 100px 40px rgba(234, 179, 8, 0.5);
    cursor: pointer;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 85%;
  width: 85%;
  height: 100vh;
  position: relative;
  padding-top: 150px;
`

export const OuterNavContainer = styled.div<{ menuOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  transform-style: preserve-3d;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  visibility: hidden;
  transition: visibility 0s .2s;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 11;

  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
`

export const OuterNav = styled.ul<{ menuOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translateY(-50%);
  transform-style: preserve-3d;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  transition: visibility 0s .2s;

  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
`

export const OuterLi = styled.li<{ menuOpen: boolean }>`
  transform-style: preserve-3d;
  transform: translateX(350px) translateZ(-1000px);
  font-size: 55px;
  font-weight: 900;
  opacity: 0;
  cursor: pointer;
  transition: transform .2s, opacity .2s;
  
  ${({ menuOpen }) => menuOpen && `
    transform: translateX(0) translateZ(0);
    opacity: 1;
    transition: transform .4s, opacity .4s;
  `}
`