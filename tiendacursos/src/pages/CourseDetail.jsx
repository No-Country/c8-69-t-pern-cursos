import React from "react";
import ReactPlayer from "react-player";
import "./styles/coursedetail.css";
import db from "../db/db";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { id } = useParams()

  const porcentaje = 30;
  const descuento = (precio) => {
    return precio - (precio * porcentaje) / 100;
  };
  const course = db[id - 1]
  return (
    <div className="container">
      <div className="card mb-3 mt-4 bg-dark" key={course.id}>
        <div className="row g-0">
          <div className="col-md-4 col-8">
            <img
              src={course.img_couse}
              className="img-fluid rounded-start imgCard"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title text-light fs-2 fw-bold">
                {course.title}
              </h1>
              <p className="card-text text-muted fs-5">
                {course.description}
              </p>
              <p className="text-warning ">★★★★★ </p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </p>
              <p className="text-light">
                Creado por <span>{course.teacher.name}</span>
              </p>
              <p>
                Nivel <span>{course.level[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" mt-5 border m-6 col-md-6 col-10">
          <h2 className="fw-bold m-2 fs-4">Lo que aprenderás</h2>
          <div className="row mt-4 mx-2">
            <div className="col-md-6 mb-5">
              <p>✔ 1 Aprender React a profundidad</p>
            </div>
            <div className="col-md-6 mb-5">
              <p>✔ 2 Aprender React a profundidad</p>
            </div>
          </div>
          <div className="row mx-2">
            <div className="col-md-6 mb-5">
              <p>✔ 3 Aprender React a profundidad</p>
            </div>
            <div className="col-md-6 mb-5">
              <p>✔ Aprender React a profundidad</p>
            </div>
          </div>
          <div className="row mx-2">
            <div className="col-md-6 mb-5">
              <p>✔ Aprender React a profundidad</p>
            </div>
            <div className="col-md-6 mb-5">
              <p>✔ Aprender React a profundidad</p>
            </div>
          </div>
        </div>

        <div className="mt-5 border m-6 col-md-3 col-5">
          <h1 className="fw-bold m-2 fs-2">
            {descuento(course.price)}US${" "}
            <span className="precioAnterior fs-5 mx-2 text-muted fw-normal">
              {course.price}US$
            </span>
          </h1>
          <p className="fs-6 mx-2 text-danger">
            {porcentaje}% de descuento{" "}
          </p>
          <button className="btn btn-success mx-2 mt-2">
            Comprar ahora
          </button>
          <p className="textoGarantia mx-2 mt-2">
            Garantía de reembolso de 30 días
          </p>
          <p className="textoGarantia mx-2">Acceso de por vida</p>
        </div>

        <div className=" border mx-6 col-md-6 col-5">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={course.vide_url[0].url}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default CardDetail;
