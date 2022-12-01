import React from "react";
import "./styles/registrarUsuario.css";
//import "react-date-picker/dist/react-datepicker.css"
import { Link } from "react-router-dom"
import { useFormik } from "formik";

const RegistrarUsuario = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      confirmarCorreo: "",
      telefono: "",
      fechaNacimineto: "",
    },
    onSubmit: (formRegistro) => {
      console.log(formRegistro);
    },
    validate: (valores) => {
      let errores = {};

      if (!valores.nombre) {
        errores.nombre = "Por favor ingrese su nombre";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        errores.nombre = "El nombre solo puede contener letras y espacios";
      }

      return errores;
    },
  });
  return (
    <div className="rrr">
      <div className="container-fluid cont-registrar">
        <div className="card estruc-registro border border-dark">
          <div className="card-header">
            <strong className="titulo">Crear Cuenta</strong>
          </div>
          <div className="card-body contenedor-form-registro">
            <form className="form-registro border border-dark" onSubmit={formik.handleSubmit}>
              <div className="row mb-2">
                <div className="col-6">
                  <label htmlFor="nombre" className="col-12 col-form-label">
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
                      <div className="col-11 error mt-1">
                        {formik.errors.nombre}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="apellido" className="col-12 col-form-label">
                    Apellido
                  </label>
                  <div className="col-12">
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      placeholder="Digite su Apellido"
                      className="form-control"
                      // onChange={formik.handleChange}
                      // value={formik.values.nombre}
                      // onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    id="correo"
                    name="correo"
                    className="form-control"
                    placeholder="Ejemplo@ejemplo.com"
                    // onChange={formik.handleChange}
                    // value={formik.values.correo}
                    // onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12">
                  <label htmlFor="clave" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="text"
                    id="clave"
                    name="clave"
                    className="form-control"
                    placeholder="Contraseña"
                    // onChange={formik.handleChange}
                    // value={formik.values.correo}
                    // onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12">
                  <label htmlFor="confirmar-clave" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="text"
                    id="confirmar-clave"
                    name="confirmar-clave"
                    className="form-control"
                    placeholder="Digite su Contraseña"
                    // onChange={formik.handleChange}
                    // value={formik.values.correo}
                    // onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <label htmlFor="telefono" className="form-label">
                  Numero de Telefono
                </label>
                <div className="input-group mb-2">
                  <div className="">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>+57</option>
                      <option>+58</option>
                      <option>+56</option>
                      <option>+1</option>
                    </select>
                  </div>
                  <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12">
                  <label htmlFor="fecha-nacimiento" className="form-label">
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    name="fecha-nacimiento"
                    id="fecha-nacimiento"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-star ">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary">
                    Registrarme
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer mb-2 justify-content-center">
            <Link to="/login">
              <a href="#" className="olvide-password" id="btn-abrir-popup">
                Inciar Session
              </a>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default RegistrarUsuario;
