import React from "react";
import Card from "./Card";

const ServiceCard = ({ title, text, image }) => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <Card
            title="Incredibly Responsive"
            text="Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef sirloin chicken ground round."
            image={`${process.env.PUBLIC_URL}/assets/images/home/icon1.png`}
          />
          <Card
            title="Superior Typography"
            text="Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef sirloin chicken ground round."
            image={`${process.env.PUBLIC_URL}/assets/images/home/icon2.png`}
          />
          <Card
            title="Incredibly Responsive"
            text="Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. Cow shankle beef sirloin chicken ground round."
            image={`${process.env.PUBLIC_URL}/assets/images/home/icon3.png`}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
