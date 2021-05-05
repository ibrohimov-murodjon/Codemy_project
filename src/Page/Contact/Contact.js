import React from "react";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Footer from "../../Components/Home/Footer/Footer";
import TopImage from "../../Components/TopImage/TopImage";
import OurTeachers from "../../Components/About/AboutTeachers/AboutTeachers";
import MenuBar from "../../Components/MenuBar/MiddleMenu";

import ContactForm from "../../Components/Contact/ContactForm";

import Navbar from "../../Components/Home/Navbar/Navbar";

function About() {
  return (
    <div style={{ paddingTop: "70.4px" }}>
      <Navbar contact="Nactive" />
      <TopImage
        heading="Contact"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing."
      />

      <MenuBar currentPath="Contact" />

      <ContactForm />

      <Aforizms />
      <OurTeachers />
      <Footer />
    </div>
  );
}

export default About;
