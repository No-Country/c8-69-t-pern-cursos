import React from "react";
import Card from "../components/Card";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
//import Footer from "../components/Footer";

import NavBar from "../components/NavBar";
import Header2 from "../components/Header2";
import Divider3 from "../components/Divider3";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header2 />

      <Divider2 />

      <Divider3 />
      <main class="row container">
        <Card />
      </main>
      <Divider />
    </div>
  );
};

export default Home;
