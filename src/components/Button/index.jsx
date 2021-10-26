import React from "react";

const Button = ({ children, color, size, className, ...rest }) => {
  const classes =
    color === "primary"
      ? "btn-primary"
      : color === "success"
      ? "btn-success"
      : color === "info"
      ? "btn-info"
      : color === "warning"
      ? "btn-warning"
      : color === "danger"
      ? "btn-danger"
      : "btn-default";

  const btnSize =
    size === "lg"
      ? "btn-lg"
      : size === "sm"
      ? "btn-sm"
      : size === "xs"
      ? "btn-xs"
      : "";

  return (
    <button
      className={`btn ${classes} ${btnSize} ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
