import styled from "styled-components";

export const Perspective = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  padding-left: 60px;

  &.effect-rotate-left {
    transform-origin: 0% 50%;
    transform: translateZ(-1800px) translateX(-50%) rotateY(45deg);
    outline: 30px solid $highlight;
  }
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