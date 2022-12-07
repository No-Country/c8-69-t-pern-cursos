import React from "react";
import "./styles/about.css";
import { Link } from "react-router-dom";
import db from "../db/db";
import imagen1 from '../assets/imagenes/imagen1.jpg'
import imagen2 from '../assets/imagenes/imagen2.jpg'
import imagen3 from '../assets/imagenes/imagen3.jpg'
import imagen4 from '../assets/imagenes/imagen4.jpg'


const About = () => {
  return (
    <>
     
      <div className="container-about contenedor-about">
       
        <article className="cont-about">
          <div className="cont-fotoportada">
            <img className="fotoportada" src={imagen1} alt="" />
          </div>
          <div className="text-about texto-about">
            <p className="text-about-item texto-about-item"><h1><b>Nuestra base de Éxito! jovenes con sueños y ganas de mejorar su calidad de vida</b></h1></p>
          </div>
         
        </article>
       


   
       <div className="title-plantel titulo-plantel">
        
          <p> Mas de 100 profesores calificados y renombrados</p>
          <Link to="/"><button className="btn-plantel boton-plantel">Ver Cursos</button></Link>
          <Link to="/contact"><button className="boton-plantel2 boton-plantel2">Inscribite</button></Link>
        </div>

      </div>
    </>
  );
};

export default About;
