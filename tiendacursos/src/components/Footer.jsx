import React from "react";
import "./styles/divisor.css";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row p-5 bg-dark text-white">
        <div className="col-6 col-xs-6 col-md-6 col-lg-3">
          <a href="#home">
            <img src="" alt="" className="item__footer" />
          </a>

          <p className="fw-light">Cursos Online 2022</p>
        </div>
        <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
          <p className="h6">Legales</p>
          <div className="mb-2">
            <a
              href=""
              target="_blank "
              rel="noreferrer"
              className="text-light text-decoration-none fw-light"
            >
              Condiciones
            </a>
          </div>
          <div className="mb-2">
            <a
              href="https://github.com/alandelleore"
              target="_blank"
              rel="noreferrer noopener"
              className="text-light text-decoration-none fw-light"
            >
              Ayuda y asistencia
            </a>
          </div>
          <div className="mb-2">
            <a
              href="#cursos"
              className="text-light text-decoration-none fw-light"
            >
              Cursos
            </a>
          </div>
        </div>
        <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
          <p className="h6 fw-semibold">Contacto</p>
          <div className="mb-2">
            <a href="/" className="text-light text-decoration-none fw-light ">
              Ponte en contacto con nosotros
            </a>
          </div>
          <div className="mb-2">
            <a
              href="mailto:alandelleore@gmail.com"
              className="text-light text-decoration-none fw-light"
            >
              Profesores
            </a>
          </div>
          <div className="mb-2">
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="text-light text-decoration-none fw-light"
            >
              Empleo
            </a>
          </div>
        </div>
        <div className="col-6 col-xs-6 col-md-6 col-lg-3 mb-2">
          <p className="h6 fw-semibold">Quienes somos?</p>
          <div className="mb-2">
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="text-light text-decoration-none fw-light"
            ></a>
          </div>
          <div className="mb-2">
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
              className="text-light text-decoration-none fw-light"
            >
              Cursos
            </a>
          </div>
          <div className="mb-2">
            <a href="/" className="text-light text-decoration-none fw-light">
              Profesores
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
