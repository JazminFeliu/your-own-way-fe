import React from "react";
import Image from "next/image";
import pretitleImg from "../public/img/hero/pretitle-img.svg";
import Header from "./Header";


const btnClick = () => {
 <NavLink to={cursos} />
}

const Hero = () => {
  return (
    <section className="bg-cream lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]">
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div data-aos='fade-down' data-aos-delay='400' className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0">
          <div className="hidden xl:flex mb-6 ml-5" data-aos='fade-left' data-aos-delay='400'>
            <Image src={pretitleImg} width={'100%'} height={'auto'} alt=""/>
          </div>
          <h1  className="text-3xl lg:text-6xl uppercase font-bold -tracking-[0.05em] mb-10" >Un curso,<br /><span className="text-orange font-normal">o certificación</span> <br />para cada necesidad</h1>
          <button className="btn btn-orange mx-auto lg:mx-0" ><a href="#servicios">Saber mas</a></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
