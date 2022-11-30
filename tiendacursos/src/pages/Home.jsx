import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import "./styles/home.css";

const Home = () => {
  return (
    <div className="container-xl ">
      <div className="contenedor">
        <Header />
        <main className="row">
          <Card />
        </main>
      </div>
    </div>
  );
};

export default Home;
