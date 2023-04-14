import React from 'react'
import PlanList from './PlanList';
function Cursos() {

  const pricing = {
    
    title: 'Pricing plan',
    plans: [
      {
        name: 'Kinder',
        price: '10',
        list: [
          { name: 'vocabulario inicial' },
          { name: 'juegos y fonemas' },
          { name: 'canciones en inglés' },
        ],
        delay: 600,
      },
      {
        name: 'Teens',
        price: '25',
        list: [
          { name: 'comunicación constructiva' },
          { name: 'interpretar textos' },
          { name: 'lectura inicial' },
          { name: 'proyecto final' },
        ],
        delay: 800,
      },
      {
        name: 'Adults',
        price: '40',
        list: [
          { name: 'situaciones profesionales' },
          { name: 'estructuras gramaticales' },
          { name: 'integracion de contenidos' },
          { name: 'laboratorio de idiomas' },
          { name: 'Video llamadas' },
        ],
        delay: 1000,
      },
    ],
  };

  return (
    <div>
      <div className='section mx-auto my-auto' >
      {/* section title */}
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
      >
        
        <h2 className='h2 section-title'>
         Cursos <span className='text-primary-200'></span>
        </h2>
      </div>
      {/* plan list */}
      <PlanList plans={pricing.plans} />
      </div>

    </div>
  )
}

export default Cursos