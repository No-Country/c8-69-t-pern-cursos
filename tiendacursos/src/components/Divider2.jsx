import React from "react";
import "./styles/divisor.css";

const Divider2 = () => {
  return (
    <div className="bg-divisior">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-4 d-flex">
            <div className="mx-2 icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-click"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="3" y1="12" x2="6" y2="12" />
                <line x1="12" y1="3" x2="12" y2="6" />
                <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
              </svg>
            </div>
            <div>
              <p className="fw-bold">
                Aprende habilidades a tu ritmo con mas de 100 cursos en video
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="icon mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-star"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </div>
            <div>
              <p className="fw-bold">
                Compra cursos impartidos por expertos del mundo real
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="mx-2 icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-infinity"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
              </svg>
            </div>
            <div>
              <p className="fw-bold">
                Aprende a tu ritmo, con acceso de por vida desde ordenadores o
                dispositivos mobiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider2;
