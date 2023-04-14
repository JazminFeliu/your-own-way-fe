import React from "react";
import ServicesSlider from "./ServiceSlider";

const Services = () => {
  return (
    <section  id="servicios" className="bg-services bg-cover bg-no-repeat bg-center min-h-[862px] py-8">
      <div data-aos="fade-up-right" className="container mx-auto h-[862px]">
        <h2 className="h2 mb-12">Our Services</h2>
        <ServicesSlider />

      </div>
    </section>
  );
};

export default Services;
