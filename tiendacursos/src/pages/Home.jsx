import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import Divider3 from "../components/Divider3";

//import "./styles/home.css";

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />

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
