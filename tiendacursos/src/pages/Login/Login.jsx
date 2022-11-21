import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="estructura-body-login">
      <div className="container estructura-login">
        <div className="d-flex">
          <div className="card contenido-login">
            <div className="card-header">
              <strong className="titulo">INGRESO</strong>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="input-group-prepend input-group mb-3">
                    <span className="input-group-text justify-content-center">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa tu correo electronico"
                      id="correo"
                    />
                  </div>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend input-group mb-3">
                    <span className="input-group-text justify-content-center">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Ingresa tu contraseña"
                      id="clave"
                    />
                  </div>
                </div>
                <div className="contenido-recuerdame input-group mb-3">
                  <input type="checkbox" placeholder="Recuerdame" />
                  <div className="text-recuerdame">
                    <strong>Recuerdame</strong>
                  </div>
                </div>
                <div className="form-is-grouped float-end ingresar">
                  <button className="btn btn-primary mr-1">
                    Iniciar Sesion
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer mb-2">
              <a
                href="/vistas/recuperarpasword/index.html"
                className="olvide-password"
                id="btn-abrir-popup"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        </div>

        <div className="mb-auto bd-highlight" id="registrame">
          <div className="card contenido-registrarme">
            <div className="card-body">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-auto">
                  <div className="card-body">
                    <h1 id="titulo-registrame">
                      ¿Aún no tienes cuenta DemoCursos?
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="btn btn-outline-primary">
                    Crear Cuenta
                  </button>
                </div>
              </div>
            </div>
            <div className="card-footer mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
