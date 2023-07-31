import React from "react";
import cn from "classnames";

import s from "./Button.module.scss";

interface ButtonProps {
  className: string;
  onClick?: () => void;
  children: string;
  type?: "button" | "submit" | "reset"| undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={cn(s.button, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
