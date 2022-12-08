import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div id="menu">
        <a className="navbar-brand" href="#">
          <img src="/imagenes/logo1.png" alt="" />
        </a>
        <ul className="navbar">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <Link to="/courses">Cursos</Link>
          </li>
          <li>
            <Link to="/about">Quienes somos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>

        <div className="main from-group">
          <button className="btn btn-outline-dark " type="submit">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <Link to="/login">
            <button className="btn btn-outline-primary" type="submit">
              Iniciar Session
            </button>
          </Link>
          <Link to="/RegistrarUsuario">
            <button className="btn btn-outline-success " type="submit">
              Registarse
            </button>
          </Link>
          <div className="faBars-icon navbar-toggler" id="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
