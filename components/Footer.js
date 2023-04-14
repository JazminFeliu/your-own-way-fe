import React from 'react';
import {BsFacebook, BsInstagram, BsEnvelopeAt} from 'react-icons/bs';

const Footer = () => {
  return <footer className='bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] 
  flex items-center py-8'>
    <div className='container mx-auto'>
      <div  className='flex  flex-col lg:flex-row justify-between'>
        <div data-aos="zoom-in-left" delay="400" className='flex-1 text-orange text-4xl text-center lg:text-left 
        flex items-center justify-center lg:justify-start mb-6'>Your Own Way</div>
        <div data-aos="zoom-in-right" delay="400" className='text-white flex-1'>
             <ul className='flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8'>
          <li><a href='#cursos'>Cursos</a></li>
          <li><a href='#servicios'>Certificaciones</a></li>
          <li><a href='#nosotros'>Nosotros</a></li>
          <li><a href='#inscripciones'>Contacto</a></li>
        </ul>  
          <div   className='flex justify-center'>
            <div className='mr-6'>Follow</div>
            <ul className='flex gap-x-4'>
              <li><a href="https://www.facebook.com/Your Own Way Instituto de Idiomas"><BsFacebook /></a></li>
              <li><a href="https://www.instagram.com/institutodeidiomasyourownway"><BsInstagram /></a></li>
              <li><a href="mailto:institutoyourownway@gmail.com"><BsEnvelopeAt /></a></li>
            </ul>
            </div>   
        </div>      
      </div>
    </div>
  </footer>;
};

export default Footer;
