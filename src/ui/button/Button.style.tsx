import { QuickSanSemiBold, primaryColor } from "@/utils/constants.style";
import styled from "styled-components";

export interface IButtonStyle {
  size: string;
}

export const WrapperButton = styled.button<IButtonStyle>`
  width: ${(props) => props.size};
  height: 37px;
  border: none;
  cursor: pointer;
  border-radius: 24px;
  background-color: ${primaryColor};
  font-size: 14px;
  font-family: ${QuickSanSemiBold};
  margin: 0 5px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
