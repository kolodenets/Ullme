import React from "react";
import cn from "classnames";

import s from "./Button.module.scss";

interface ButtonProps {
  className: string;
  onClick: () => void;
  children: string
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={cn(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
