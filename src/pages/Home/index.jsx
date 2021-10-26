import React from "react";
import { Link } from "react-router-dom";
import Action from "../../components/Action";
import Alert from "../../components/Alert";
import Clients from "../../components/Clients";
import Features from "../../components/Features";
import HeroSection from "../../components/HeroSection";
import ServiceCard from "../../components/ServiceCard";

const Home = () => {
  const heroImages = [
    { id: 1, image: "hill.png", name: "Hero 1", class: "slider-hill" },
    { id: 2, image: "house.png", name: "Hero 2", class: "slider-house" },
    { id: 3, image: "sun.png", name: "Hero 3", class: "slider-sun" },
    { id: 4, image: "birds1.png", name: "Hero 4", class: "slider-birds1" },
    { id: 5, image: "birds2.png", name: "Hero 5", class: "slider-birds2" },
  ];

  // const heroImages = {
  //   id: 5,
  //   image: "house.png",
  //   name: "Hero 5",
  //   class: "slider-birds2",
  // };

  return (
    <>
      <HeroSection
        title="We Are Creative Nerds"
        subtitle="Boudin doner frankfurter pig. Cow shank bresaola pork loin tri-tip tongue venison pork belly meatloaf short loin landjaeger biltong beef ribs shankle chicken andouille."
        images={heroImages}
      />

      <Alert
        title="Oh snap! You got an error!"
        content="Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
        color="danger"
        onClose
      />
      <Alert
        title="Do not close me"
        content="Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
      />
      <Alert
        title="Oh snap! You got an error!"
        content="Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
        color="warning"
        onClose
      />

      <ServiceCard />
      <Action
        title="Triangle Corporate Template"
        subtitle="A responsive, retina-ready & wide multipurpose template."
      >
        <div className="tour-button">
          <Link to="#" className="btn btn-common">
            TAKE THE TOUR
          </Link>
        </div>
      </Action>

      <Features />

      <Clients />
    </>
  );
};

export default Home;
