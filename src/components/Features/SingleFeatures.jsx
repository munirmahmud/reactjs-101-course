import React from "react";

const SingleFeatures = ({
  title,
  content,
  image,
  className,
  imagePosition,
  ...rest
}) => {
  return (
    <div className={`single-features ${className ? className : ""}`} {...rest}>
      {!imagePosition && (
        <div className="col-sm-5">
          <img src={image} className="img-responsive" alt={title} />
        </div>
      )}

      <div
        className={`col-sm-6 ${
          imagePosition ? "col-sm-offset-1 align-right" : ""
        }`}
      >
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      {imagePosition && (
        <div className="col-sm-5">
          <img src={image} className="img-responsive" alt={title} />
        </div>
      )}
    </div>
  );
};

export default SingleFeatures;
