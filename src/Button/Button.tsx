import React, { CSSProperties, FC, MouseEventHandler } from "react";

import "./Button.css";

export interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  style?: CSSProperties;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  children?: JSX.Element;
}

const defaultProps: Partial<Props> = {
  onClick: () => {},
  size: "medium",
  variant: "contained",
  color: "#1976d2",
  disabled: false,
};

const Button: FC<Props> = ({
  style,
  className,
  size,
  variant,
  color,
  disabled,
  children,
  ...props
}) => {
  const customStyle = {
    "--color": !disabled && color,
    ...style,
  } as React.CSSProperties;

  return (
    <button
      disabled={disabled}
      style={customStyle}
      className={`button ${size} ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
