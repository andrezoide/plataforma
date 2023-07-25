import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Buttons.css';

function Circle() {
  return (
    <>

      <div className="buttonContainer">
        <button className='location1'>
          <Link to="/quem-somos" className="linkContent">
            <p>Quem somos</p>
            <div className='circleButton'></div>
          </Link>
        </button>
        <button className='location2'>
          <Link to="/editora" className="linkContent">
            <p>Editora</p>
            <div className='circleButton'></div>
          </Link>
        </button>
        <button className='location3'>
          <Link to="/tecnologias-em-educacao" className="linkContent">
            <p>Tecnologias em Educação</p>
            <div className='circleButton'></div>
          </Link>
        </button>
        <button className='location4'>
          <Link to="/consultoria" className="linkContent">
            <p>Consultoria</p>
            <div className='circleButton'></div>
          </Link>
        </button>
        <button className='location5'>
          <Link to="/empreendedorismo" className="linkContent">
            <p>Empreendedorismo</p>
            <div className='circleButton'></div>
          </Link>
        </button>
        <button className='location6'>
          <Link to="/projetos-educacionais" className="linkContent">
            <p>Projetos Educacionais</p>
            <div className='circleButton'></div>
          </Link>
        </button>
      </div>
    </>

  );
}

export default Circle;