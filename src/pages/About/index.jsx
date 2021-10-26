import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import ServiceCard from "../../components/ServiceCard";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb
        title="About Us"
        subtitle="Why our Clients love to work with us."
        // bgImage={`${process.env.PUBLIC_URL}${bgImg}`}
      />
      <ServiceCard />
    </>
  );
};

export default AboutUs;
