import React from "react";
import Proglang from "../../Components/Home/ProgLang/Proglang";
import Staffs from "../../Components/Home/Staffs/Staffs";
import Footer from "../../Components/Home/Footer/Footer";
import About from "../../Components/Home/About/About";

function Home() {
  return (
    <>
      <Proglang />
      <About />
      <Staffs />
      <Footer />
    </>
  );
}

export default Home;
