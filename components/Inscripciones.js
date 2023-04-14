import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Inscripciones() {
  const contact = {
    title: "Sigamos en contacto",
    info: [
      {
        title: "Your Own Way",
        subtitle:
          "Mail, redes sociales o una consulta por nuestro formulario seran bienvenidos",
        address: {
          icon: <FaMapMarkerAlt />,
          name: "Emilio Lamarca 2300 (esquina Arregui)",
        },
        phone: {
          icon: <FaPhoneAlt />,
          number: "+54 11 5858 8428",
        },
        email: {
          icon: <FaEnvelope />,
          address: "institutoyourownway@gmail.com",
        },
        link: "Ver en mapa",
      },
    ],
    form: {
      name: "Nombre y Apellido",
      email: "Email",
      message: "Mensaje",
      btnText: "Enviar",
    },
  };

  return (
    <section
      id="inscripciones"
      className="section  py-[88px] md:py-[110px]
    lg:pt[140px] lg:pb-[180px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1 px-[30px]">
            <h2 className="h2 max-w-[490px]">{contact.title}</h2>

            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {contact.info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={index}>
                    <div
                      data-aos="fade-in"
                      className="font-primary uppercase font-medium text-orange-400 text-xl mb-3"
                    >
                      {title}
                    </div>
                    <div
                      data-aos="fade-in"
                      delay="600"
                      className="mb-6 text-primary-600 leading-[187%] tracking-[0.02em] "
                    >
                      {subtitle}
                    </div>
                    <div
                      className="flex flex-col gap-y-3 mb-8"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                    >
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div className="text-primary-100">{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                      <a
                        className="font-medium border-b border-dark pb-[5px]"
                        href="https://www.google.com/maps/place/Emilio+Lamarca+2300,+Buenos+Aires/@-34.61094,-58.4953689,17z/data=!4m6!3m5!1s0x95bcc9d86fce786f:0x8234d43fd0e5b9b8!8m2!3d-34.61094!4d-58.4953689!16s%2Fg%2F11fcms9rsf"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center px-3">
            <form
              className="flex flex-col gap-y-10 w-full"
              data-aos="zoom-in-left"
            >
              <input
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.name}
                type="text"
              />
              <input
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.email}
                type="text"
              />
              <textarea
                className="border b border-dark placeholder:text-orange-200
                italic tracking-[0.06em] outline-none pb-4 px-2"
                placeholder={contact.form.message}
                type="text"
              />
              <button className="btn btn-sm btn-primary self-start">
                {contact.form.btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inscripciones;
