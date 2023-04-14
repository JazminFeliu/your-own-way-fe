import React, { useState } from "react";

import Image from "next/image";
import YOW1Img from "../public/img/pets/classroom1.png";
import YOW2Img from "../public/img/pets/classroom2.png";
import YOW3Img from "../public/img/pets/classroom3.png";
import YOW4Img from "../public/img/pets/classroom4.png";
import YOW5Img from "../public/img/pets/classroom5.png";
import YOW6Img from "../public/img/pets/classroom6.png";
import YOW7Img from "../public/img/pets/classroom7.png";
import YOW8Img from "../public/img/pets/classroom8.png";
import YOW9Img from "../public/img/pets/classroom9.png";
import YOW10Img from "../public/img/pets/classroom10.png";
import YOW11Img from "../public/img/pets/clases1.png";
import YOW12Img from "../public/img/pets/banner1.png";
import Badge from "../public/img/pets/badge.svg";

const pets = [
  {
    id: 1,
    category: "Intermediate",
    name: "Countries",
    image: YOW1Img,
  },
  {
    id: 2,
    category: "Initial",
    name: "Parts of the body",
    image: YOW2Img,
  },
  {
    id: 3,
    category: "Adjetives",
    name: "Work in groups",
    image: YOW3Img,
  },
  {
    id: 4,
    category: "3rd Children",
    name: "My Fridge",
    image: YOW4Img,
  },
  {
    id: 5,
    category: "Intermediate",
    name: "Days",
    image: YOW5Img,
  },
  {
    id: 6,
    category: "Initial",
    name: "Toys",
    image: YOW6Img,
  },
  {
    id: 7,
    category: "1st Children",
    name: "The numbers",
    image: YOW7Img,
  },
  {
    id: 8,
    category: "Healthy",
    name: "Unhealthy food",
    image: YOW8Img,
  },
  {
    id: 9,
    category: "Advance",
    name: "Adverbs of Frequency",
    image: YOW9Img,
  },
  {
    id: 10,
    category: "Important",
    name: "Cyber Bulling",
    image: YOW10Img,
  },
  {
    id: 11,
    category: "Business Curses",
    name: "Your own way",
    image: YOW11Img,
  },
  {
    id: 12,
    category: "Certifications",
    name: "TOELF and First Certificate",
    image: YOW12Img,
  },
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[1]);
  const [petIndex, setPetIndex] = useState(1);
 
  

  const getPetDetails = (id) => {
    const pet = pets.find((pet) => {
      return pet.id === id
    })
    setPetDetails(pet)
  }

  return (
    <section  id="cursos" className="bg-pets bg-center py-6 overflow-hidden">
      <div data-aos="fade-right" delay="600" className="flex flex-col lg:flex-row">
     
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">

          <Image src={Badge} width={220} height={227} alt="" />
        </div>
        <div data-aos="fade-down-left" delay="600" className="flex-1 flex flex-col lg:flex-row">
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white ">
              <div className="text-[32px]">{petDetails.category}</div>
              <div className="uppercase text-[17px] mb-1">
                ({petDetails.name})
              </div>
              <div className="w-[150px] h-[150px] mx-auto border-4 rounded-full border-white lg:mx-0">
                <Image
                  className="rounded-full"
                  src={petDetails.image}
                  width={150}
                  height={150}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative lg:w-[60%] flex-1 flex items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:mr-6" >
              {pets.map((pet, index) => {
                return (
                  <div onClick={() => {getPetDetails(pet.id); setPetIndex(index);} }  className="cursor-pointer relative" key={index}>
                    <div className={` w-full h-full absolute rounded-full ${petIndex === index ? 'border-2 border-white': 'bg-black/40'}`}></div>
                    <Image
                      className="rounded-full"
                      src={pet.image}
                      width={95}
                      height={95}
                      alt=""
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
