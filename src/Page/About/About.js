import React from "react";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Footer from "../../Components/Home/Footer/Footer";
import TopImage from "../../Components/TopImage/TopImage";
import OurTeachers from "../../Components/About/AboutTeachers/AboutTeachers" 
import MenuBar from "../../Components/MenuBar/MiddleMenu";
import AkademicsHistory from "../../Components/AboutUS/AkademicsHistory/AkdemicsHis";

function About() {
  return (
    <div>
      {/* navbar */}
      {/* divImage */}
      <TopImage
        heading="About Us"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      {/* divImage */}
      {/* menucha */}
      <MenuBar currentPath="About Us" />
      <AkademicsHistory />
      {/* menucha */}
      {/* Why Academics Works */}
      <Aforizms />
      <OurTeachers />   
      <Footer />
    </div>
  );
}

export default About;
