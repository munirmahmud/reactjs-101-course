import React from "react";

const Action = ({ title, subtitle, children, className, ...rest }) => {
  return (
    <section
      id="action"
      className={`responsive ${className ? className : ""}`}
      {...rest}
    >
      <div className="vertical-center">
        <div className="container">
          <div className="row">
            <div className="action take-tour">
              <div
                className="col-sm-7 wow fadeInLeft"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <h1 className="title">{title}</h1>
                <p>{subtitle}</p>
              </div>
              <div
                className="col-sm-5 text-center wow fadeInRight"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
