import React from "react";
import image1 from "../../assets/images/home/image1.png";
import image2 from "../../assets/images/home/image2.png";
import SingleFeatures from "./SingleFeatures";
// import image3 from '../../assets/images/home/image3.png'

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <SingleFeatures
            title="Experienced and Enthusiastic"
            content="Pork belly leberkas cow short ribs capicola pork loin. Doner fatback frankfurter jerky meatball pastrami bacon tail sausage. Turkey fatback ball tip, tri-tip tenderloin drumstick salami strip steak."
            image={image1}
          />
          <SingleFeatures
            title="Built for the Responsive Web"
            content="Mollit eiusmod id chuck turducken laboris meatloaf pork loin tenderloin swine. Pancetta excepteur fugiat strip steak tri-tip. Swine salami eiusmod sint, ex id venison non. Fugiat ea jowl cillum meatloaf."
            image={image2}
            imagePosition
          />
          <SingleFeatures
            title="Experienced and Enthusiastic"
            content="Pork belly leberkas cow short ribs capicola pork loin. Doner fatback frankfurter jerky meatball pastrami bacon tail sausage. Turkey fatback ball tip, tri-tip tenderloin drumstick salami strip steak."
            image={image1}
          />
          <SingleFeatures
            title="Built for the Responsive Web"
            content="Mollit eiusmod id chuck turducken laboris meatloaf pork loin tenderloin swine. Pancetta excepteur fugiat strip steak tri-tip. Swine salami eiusmod sint, ex id venison non. Fugiat ea jowl cillum meatloaf."
            image={image2}
            imagePosition
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
