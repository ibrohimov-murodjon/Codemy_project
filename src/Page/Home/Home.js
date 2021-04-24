import React from "react";
import Proglang from "../../Components/Home/ProgLang/Proglang";
import Staffs from "../../Components/Home/Staffs/Staffs";
import Footer from "../../Components/Home/Footer/Footer";
import About from "../../Components/Home/About/About";
import Carousel from '../../Components/Home/Corusel/Carosuel'
function Home() {
  return (
    <>
      <Carousel/>
      <Proglang />
      <About />
      <Staffs />
      <Footer />
    </>
  );
}

export default Home;
