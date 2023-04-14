import React from 'react';
import Image  from 'next/image';
import Logo from '../public/img/header/logo.svg';

const Header = () => {
  return <header className='py-6 lg:absolute lg:w-full lg:left-0'>
    <div className='container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative'>
      <a href="/">
        <Image src={Logo} alt="" />
      </a>
      <nav data-aos='fade-right' data-aos-delay='600' className='text-xl flex gap-x-4 lg:gap-x-12'>
        <a href='#cursos'>Cursos</a>
        <a href='#servicios'>Servicios</a>
        <a href='#nosotros'>Nosotros</a>
        <a href='#inscripciones'>Contacto</a>
      </nav>
      <button className='btn btn-primary lg:btn-outline' data-aos='fade-up' data-aos-delay='500'><a href='#inscripciones'>Inscripciones</a></button>

    </div>
  </header>;
};

export default Header;
