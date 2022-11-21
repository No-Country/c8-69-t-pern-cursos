import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons"

import './styles/navbar.css'

const NavBar = () => {
  return (
    <div>
      <div id="menu">
        <a className="navbar-brand" href="#">
          <div className="input-group mb-3">
            <img src="/imagenes/logo1.png" alt="" />
            <input
              className="form-control me-2"
              type="text"
              name="buscar"
              placeholder="Desea buscar algo"
              id="buscar"
            />
          </div>
        </a>
        <ul className="navbar">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Cusrsos</a>
          </li>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>

        <div className="main from-group">
          <button className="btn btn-outline-dark " type="submit">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="btn btn-outline-primary" type="submit">
            Iniciar Session
          </button>
          <button type="button" className="btn btn-outline-success ">
            Registarse
          </button>
          <div className="faBars-icon" id="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
