import React from "react";
import { WrapperButton } from "./Button.style";

export interface IButton {
  children: React.ReactNode;
  size: "small" | "large" | "extralarge" | "fluid";
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onActionButton?: () => void;
}

const Button = ({
  size,
  children,
  type,
  disabled,
  onActionButton,
}: IButton) => {

  const buttonSize = {
    small: "112px",
    large: "143px",
    extralarge: "170px",
    fluid: "100%",
  };

  return (
    <WrapperButton
      size={buttonSize[size]}
      type={type}
      disabled={disabled}
      onClick={onActionButton}
      data-testid="button_test">
      {children}
    </WrapperButton>
  );
};

export default Button;
