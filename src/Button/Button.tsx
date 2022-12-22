import React, {
  createContext,
  useContext,
  CSSProperties,
  FC,
  MouseEventHandler,
} from "react";

import "./Button.css";

export interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  style?: CSSProperties;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  children?: JSX.Element | string;
  classesContext?: React.Context<ClassesContext>;
}

interface ClassesContext {
  classes: string;
}

const defaultProps: Partial<Props> = {
  onClick: () => {},
  size: "medium",
  variant: "contained",
  color: "#1976d2",
  disabled: false,
  className: "",
  classesContext: createContext({ classes: "" }),
};

const Button: FC<Props> = ({
  style,
  className,
  size,
  variant,
  color,
  disabled,
  children,
  classesContext,
  ...props
}) => {
  const customStyle = {
    "--color": !disabled && color,
    ...style,
  } as React.CSSProperties;

  const buttonContext = useContext(
    classesContext as React.Context<ClassesContext>
  );

  return (
    <button
      disabled={disabled}
      style={customStyle}
      className={`button ${size} ${variant} ${className} ${buttonContext?.classes}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
