import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "./styles/contact.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formlarioEnviado, cambiarFormularioEnviado] = useState(false);
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      mensaje: "",
    },
    onSubmit: (formData, { resetForm }) => {
      resetForm();
      console.log(formData);
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 5000);
    },
    validate: (valores) => {
      let errores = {};

      // Vakidacion para el nombre
      if (!valores.nombre) {
        errores.nombre = "Por favor ingrese su nombre";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        errores.nombre = "El nombre solo puede contener letras y espacios";
      }

      // Validacion para el apellido
      if (!valores.apellido) {
        errores.apellido = "Por favor ingrese su apellido";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
        errores.apellido = "El nombre solo puede contener letras y espacios";
      }

      // validacion para el correo electronico
      if (!valores.correo) {
        errores.correo = "Por favor ingrese su correo electronico";
      } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)
      ) {
        errores.correo = `El correo solo puede contener letras, numeros, puntos, guines y guion bajo `;
      }

      //validacion para el campo mensaje
      if (!valores.mensaje) {
        errores.mensaje = "Por favor ingrese su mensaje";
      }

      return errores;
    },
  });
  return (
    <div className="container-fluid contenido-padre ">
      <div className="row">
        <div className="col-md-5 col1">
          <div className="row">
            <div className="col-lg-12">
              <div className="row ubicacion">
                <div className="col-lg-12 ubi-contect">
                  <strong>Ubicacion:</strong>
                  <p>28 jackson Bid ste 1020 new york ll 60604-2340</p>
                </div>
              </div>
              <div className="row siguenos">
                <div className="col-lg-12 sigue-contect">
                  <div className="row">
                    <strong>Siguenos En:</strong>
                  </div>
                  <div className="row">
                    <button
                      className="icon btn btn-outline-dark "
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button
                      className="icon btn btn-outline-dark "
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button
                      className="icon btn btn-outline-dark "
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col2">
          <div className="row">
            <div className="row" > 
              <div className="col-md-12 cont-titulo">
                <strong id="titulo">Formulario de Contacto</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 contect-form">
                <form
                  className="formulario border border-primary"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row mb-2">
                    <div class="col-6">
                      <label htmlFor="nombre" class="col-12 col-form-label">
                        Nombre
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Digite su nombre "
                          className="form-control"
                          onChange={formik.handleChange}
                          value={formik.values.nombre}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.nombre && formik.errors.nombre && (
                          <div className="col-11 error mt-2">
                            {formik.errors.nombre}
                          </div>
                        )}
                      </div>
                    </div>
                    <div class="col-6">
                      <label htmlFor="apellido" class="col-12 col-form-label">
                        Apellido
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          placeholder="Digite su apellido "
                          className="form-control"
                          onChange={formik.handleChange}
                          value={formik.values.apellido}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.apellido && formik.errors.apellido && (
                          <div className="col-11 error mt-2">
                            {formik.errors.apellido}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div class="col-12">
                      <label htmlFor="correo" class="form-label">
                        Correo
                      </label>
                      <input
                        type="text"
                        id="correo"
                        name="correo"
                        className="form-control"
                        placeholder="Ejemplo@ejemplo.com"
                        onChange={formik.handleChange}
                        value={formik.values.correo}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.correo && formik.errors.correo && (
                        <div className="col-ms-11 error mt-2">
                          {formik.errors.correo}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div class="col-12">
                      <label htmlFor="mensaje" class="col-12 col-form-label">
                        Mensaje:
                      </label>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        cols="10"
                        rows="3"
                        className="form-control"
                        placeholder="Por favor digite su mensaje"
                        onChange={formik.handleChange}
                        value={formik.values.mensaje}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      {formik.touched.mensaje && formik.errors.mensaje && (
                        <div className="col-12 error mt-2">
                          {formik.errors.mensaje}
                        </div>
                      )}
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                  {formlarioEnviado && (
                    <p className="exito">Formulario enviado con exito</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* <div className="card-header btn-regreso">
            <Link to="/">
              <button className="btn btn-outline-dark">Regresar Home</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
