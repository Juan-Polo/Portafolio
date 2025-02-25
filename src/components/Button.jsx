import React, { Children } from "react";

const Button = ({ onClick, Children, ariaLabel }) => {
  return (
    <Button
      onClick={onClick}
      ariaLabel={ariaLabel}
      className={`button ${className}`}
    >
      {Children}
    </Button>
  );
};

export default Button;
