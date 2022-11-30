import React from "react";
//import { Link } from "react-router-dom";
import "./styles/registrarUsuario.css";
//import { useFormik} from 'formik'

const RegistrarUsuario = () => {
  return (
    <div className="rrr">
      <div className="container-fluid cont-registrar">
        <div className="card estruc-registro border border-dark">
          <div className="card-header">
            <strong className="titulo">Crear Cuenta</strong>
          </div>
          <div className="card-body contenedor-form-registro">
            <form className="form-registro">
              <div className="row mb-3">
                <div className="col-6 mb-">
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
                      // onChange={formik.handleChange}
                      // value={formik.values.nombre}
                      // onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="col-6 mb-">
                  <label htmlFor="Apellido" className="col-12 col-form-label">
                    Apellido
                  </label>
                  <div className="col-12">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Digite su nombre "
                      className="form-control"
                      // onChange={formik.handleChange}
                      // value={formik.values.nombre}
                      // onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <label htmlFor="correo" className="form-label">
                    Correo
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
                  <label htmlFor="correo" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="text"
                    id="correo"
                    name="correo"
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
                  <label htmlFor="correo" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="text"
                    id="correo"
                    name="correo"
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
                  <label htmlFor="correo" className="form-label">
                    Numero de Telefono
                  </label>
                  <div className="input-group mb-3">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button" id="tel-dropdown"
                        data-bs-toggle="dropdown"
                      >
                        +57
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="tel-dropdown">
                        <li>
                          <a href="#" className="dropdow-item">1</a>
                        </li>
                        <li>
                          <a href="#" className="dropdow-item">2</a>
                        </li>
                        <li>
                          <a href="#" className="dropdow-item">3</a>
                        </li>
                      </ul>
                    </div>
                    {/* <input type="text" class="form-control" aria-label="Text input with dropdown button"> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer mb-2">
            <a href="#" className="olvide-password" id="btn-abrir-popup">
              Inciar Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;
