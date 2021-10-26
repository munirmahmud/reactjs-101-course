import React, { useState } from "react";

const Alert = (props) => {
  const [isShowAlert, setShowAlert] = useState(true);

  const { title, content, onClose, color, className, children, ...rest } =
    props;

  const alertStyle =
    color === "danger"
      ? "alert-danger"
      : color === "info"
      ? "alert-info"
      : color === "warning"
      ? "alert-warning"
      : "alert-success";

  return isShowAlert ? (
    <div
      className={`alert ${alertStyle} ${className ? className : ""} fade in`}
      {...rest}
    >
      {onClose && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
          onClick={() => setShowAlert(false)}
        >
          ×
        </button>
      )}
      {children ? (
        children
      ) : (
        <>
          {title && <h4>{title}</h4>}
          {content && <p>{content}</p>}
        </>
      )}
    </div>
  ) : (
    ""
  );
};

export default Alert;
