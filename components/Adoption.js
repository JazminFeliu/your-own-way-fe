import React from "react";
import Image from "next/image";
import Img1 from "../public/img/adoption/img1.png";

const Adoption = () => {
  return (
    <section id="nosotros" className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        <div data-aos="fade-up-left" delay="500" className="flex-1 mb-6 lg:mb-0 ">
          <Image src={Img1} width={542} height={560} alt="" />
        </div>
        <div data-aos="zoom-in-left" className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2">American and British english for everyone!</h2>
          <p data-aos="zoom-in-right"  className="mb-6">
            Your own way Institute, se inició en el año 2007 Nuestro objetivo de
            enseñanza como establecimiento educativo, es que los alumnos
            aprendan el idioma a través de actividades lúdicas, dinámicas y
            creativas, brindándole las herramientas para lograrlo.
            Los esperamos!
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4">
            <li>Adheridos a los programas de Ex alumnos del Lenguas Vivas</li>
            <li>Módulos de gramática y Laboratorio de conversación</li>
            <li>Institución asociada a la Escuela de Neurociencia</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
