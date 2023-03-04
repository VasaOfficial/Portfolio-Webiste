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
  outline: 30px solid #eab308;
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
  outline: 30px solid #eab308;
`}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 85%;
  width: 85%;
  height: 100vh;
  position: relative;
  padding-top: 100px;
`

export const OuterNavContainer = styled.div`
  display: none;
`

export const OuterNav = styled.ul`
  display: none;

  &.is-vis {
    visibility: visible;
  }
`

export const OuterLi = styled.li`
  display: none;
`