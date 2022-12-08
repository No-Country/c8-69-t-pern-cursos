import React, { useEffect } from "react";
import "./styles/registrarUsuario.css";
//import "react-date-picker/dist/react-datepicker.css"
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const RegistrarUsuario = ({ setShow, show }) => {

  useEffect(() => {
    if (show === false || show === undefined) {
      setShow(true)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      password2: "",
      telefono: "",
      fechaNacimiento: "",
    },
    onSubmit: (formRegistro) => {
      console.log(formRegistro);
    },
    validate: (valores) => {
      let errores = {};

      //validacion del nombre
      if (!valores.nombre) {
        errores.nombre = "Por favor ingrese su nombre";
      } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        errores.nombre = "El nombre solo puede contener letras y espacios";
      }

      //validacion del apellido
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

      //Validacion para la contraseña
      if (!valores.password) {
        errores.password = "La contraseña es obligatoria";
      } else if (!/^.{4,12}$/.test(valores.password)) {
        errores.password = `La contraseña debe de terner 4 a 12 digitos`;
      }

      //Validar si las contraseñas son iguales

      //Validacion para la contraseña
      if (!valores.password2) {
        errores.password2 = "La contraseña es obligatoria";
      } else if (!/^.{4,12}$/.test(valores.password2)) {
        errores.password2 = `La contraseña debe de terner 4 a 12 digitos`;
      }

      //Validar si las contraseñas son iguales
      if (valores.password != valores.password2) {
        errores.password2 = "La contraseña no son iguales";
      }

      return errores;
    },
  });

  // const validarpassword2 = () => {
  //   if (password.campo.length > 0) {
  //     if (password.campo !== password2.campo) {
  //       console.log("no son iguales");
  //     }else{
  //       console.log("son iguales");
  //     }
  //   }
  // };

  return (
    <div className="">
      <div className="container-fluid cont-registrar">
        <div className="card estruc-registro border border-dark">
          <div className="card-header">
            <strong className="titulo">Crear Cuenta</strong>
          </div>
          <div className="card-body contenedor-form-registro">
            <form
              className="form-registro border border-dark"
              onSubmit={formik.handleSubmit}
            >
              <div className="row mb-">
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
                      <div className="col-12 error mt-1">
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
                      onChange={formik.handleChange}
                      value={formik.values.apellido}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.apellido && formik.errors.apellido && (
                      <div className="col-12 error mt-1">
                        {formik.errors.apellido}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-">
                <div className="col-12">
                  <label htmlFor="correo" className="col-12 col-form-label">
                    Correo electrónico
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
                    <div className="col-12 error mt-1">
                      {formik.errors.correo}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-">
                <div className="col-12">
                  <label htmlFor="password" className="col-12 col-form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="col-11 error mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-">
                <div className="col-12">
                  <label htmlFor="password2" className="col-12 col-form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="Digite su Contraseña"
                    onChange={formik.handleChange}
                    value={formik.values.password2}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password2 && formik.errors.password2 && (
                    <div className="col-11 error mt-1">
                      {formik.errors.password2}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mb-">
                <label htmlFor="telefono" className="col-12 col-form-label">
                  Numero de Telefono
                </label>
                <div className="col-12 input-group">
                  <div className="col-2">
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
                  <div className="col-10">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.telefono}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.telefono && formik.errors.telefono && (
                      <div className="col-10 error mt-1">
                        {formik.errors.telefono}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-12">
                  <label htmlFor="fechaNacimiento" className="col-12 col-form-label">
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    id="fechaNacimiento"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.fechaNacimiento}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fechaNacimiento &&
                    formik.errors.fechaNacimiento && (
                      <div className="col-11 error mt-1">
                        {formik.errors.fechaNacimiento}
                      </div>
                    )}
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
