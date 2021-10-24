import React from "react";

const Card = ({ title, text, image }) => {
  return (
    <div
      className="col-sm-4 text-center padding wow fadeIn"
      data-wow-duration="1000ms"
      data-wow-delay="300ms"
    >
      <div className="single-service">
        <div
          className="wow scaleIn"
          data-wow-duration="500ms"
          data-wow-delay="300ms"
        >
          <img src={image} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
