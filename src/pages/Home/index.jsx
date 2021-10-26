import React from "react";
import Action from "../../components/Action";
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

      <ServiceCard />
      <Action
        title="Triangle Corporate Template"
        subtitle="A responsive, retina-ready & wide multipurpose template."
      >
        <div className="tour-button">
          <a href="#" className="btn btn-common">
            TAKE THE TOUR
          </a>
        </div>
      </Action>

      <Features />

      <Clients />
    </>
  );
};

export default Home;
