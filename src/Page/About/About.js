import React from "react";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Footer from "../../Components/Home/Footer/Footer";
import TopImage from "../../Components/TopImage/TopImage";
import MenuBar from "../../Components/MenuBar/MiddleMenu";

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
      {/* menucha */}
      {/* Why Academics Works */}
      <Aforizms />
      {/* Our Teachers */}
      <Footer />
    </div>
  );
}

export default About;
