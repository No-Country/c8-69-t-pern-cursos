import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="container-xl ">
      <NavBar />
      <Slider />
      <main class="row">
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
