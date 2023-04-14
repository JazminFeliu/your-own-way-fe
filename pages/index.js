
import { useEffect } from 'react';
// import components
import Hero from '../components/Hero';
import Pets from '../components/Pets';
import Cursos from '../components/Cursos';
import Inscripciones from '../components/Inscripciones';
import Services from '../components/Services';
import Adoption from '../components/Adoption';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {Aos.init({
    duration: 2500,
    delay: 400,
  })},[]);
  
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Cursos />
      <Services />
      <Adoption />
      <Inscripciones />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
