import React from "react";
// import "./styles/about.css";
import { Link } from "react-router-dom";
import db from "../db/db";
// import imagen1 from '../assets/imagenes/imagen1.jpg'
// import imagen2 from '../assets/imagenes/imagen2.jpg'
// import imagen3 from '../assets/imagenes/imagen3.jpg'
// import imagen4 from '../assets/imagenes/imagen4.jpg'


const About = () => {
  return (
    <>




      <div className="container-about">
        <article className="cont-about">
          <div className="cont-fotoportada">
            {/* <img className="fotoportada" src={imagen1} alt="" /> */}
          </div>
          <div className="text-about">
            <p className="text-about-item"><h1><b>Nuestra base de Éxito! Los Jovenes con sueños y ganas de mejorar su calidad de vida</b></h1></p>
          </div>
          <Link to="/"><button className="btn-about">Ver Cursos</button></Link>
        </article>

        {/* 
<div className='container-carousel'>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen2} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagen3} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagen4} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div> */}





        <div className="title-plantel">
          Mas de 100 profesores calificados y renombrados
          <Link to="/"><button className="btn-plantel">Ver Cursos</button></Link>
          <Link to="/contact"><button className="btn-plantel2">Inscribite</button></Link>
        </div>


        {db.map((course) => (

          <>

            <div
              className="card mb-1 mt-2 render"

              key={course.id}
            >
              <div className="row g-0">
                <div className="col-md-4 col-6">
                  <img
                    src={course.teacher.image_teacher}
                    className="img-fluid rounded-start imgCard teacher"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{course.teacher.name}</h5>
                    <p className="card-text">{course.title}</p>
                    <p className="card-text">
                      <small className="text-muted">Level: {course.level[0]}</small>
                    </p>
                    <p className="text-warning ">Calification: ★★★★★ </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default About;
