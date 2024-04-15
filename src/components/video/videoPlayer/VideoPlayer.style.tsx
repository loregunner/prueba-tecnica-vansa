import styled from "styled-components";

export interface IModaltStyle {
  isActive: boolean;
}

export const WrapperVideoPlayer = styled.div<IModaltStyle>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #000000bb;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

