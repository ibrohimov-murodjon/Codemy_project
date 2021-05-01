import React from "react";
import Courses from "../../Components/Home/Courses/Courses";
import Proglang from "../../Components/Home/ProgLang/Proglang";
import Staffs from "../../Components/Home/Staffs/Staffs";
import Footer from "../../Components/Home/Footer/Footer";
import About from "../../Components/Home/About/About";
import Carousel from "../../Components/Home/Corusel/Carosuel";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Navbar from "../../Components/Home/Navbar/Navbar";
import Videos from "../../Components/Home/Videos/Videos"
function Home() {
  return (
    <div>

      <Navbar home="Nactive" />
      <Carousel />
      <Proglang />
      <Courses />
      <About />
      <Staffs />
      <Aforizms />
      <Footer />
      <Videos />
    </div>
  );
}

export default Home;
