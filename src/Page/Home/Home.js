import React from "react";
<<<<<<< HEAD
// import Proglang from "../../Components/Home/ProgLang/Proglang";
// import Staffs from "../../Components/Home/Staffs/Staffs";
// import Footer from "../../Components/Home/Footer/Footer";
// import About from "../../Components/Home/About/About";
import Videos from "../../Components/Home/Videos/Videos"
function Home() {
  return (
    <>
    <Videos />
    </>
=======
import Courses from "../../Components/Home/Courses/Courses";
import Proglang from "../../Components/Home/ProgLang/Proglang";
import Staffs from "../../Components/Home/Staffs/Staffs";
import Footer from "../../Components/Home/Footer/Footer";
import About from "../../Components/Home/About/About";
import Carousel from "../../Components/Home/Corusel/Carosuel";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Navbar from "../../Components/Home/Navbar/Navbar";

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

    </div>
>>>>>>> 83eee4a18f6d6be823a23fa15b5164c3a43a5e42
  );
}

export default Home;
