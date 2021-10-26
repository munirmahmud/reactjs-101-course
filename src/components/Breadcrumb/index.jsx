import React from "react";

const BreadCrumb = ({ title, subtitle, bgImage }) => {
  return (
    <section
      id="page-breadcrumb"
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})` }
          : {
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/tour-bg.png)`,
            }
      }
    >
      <div className="vertical-center sun">
        <div className="container">
          <div className="row">
            <div className="action">
              <div className="col-sm-12">
                {title && <h1 className="title">{title}</h1>}
                {subtitle && <p>{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
