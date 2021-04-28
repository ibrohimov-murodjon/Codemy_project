import React from "react";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Footer from "../../Components/Home/Footer/Footer";
import TopImage from "../../Components/TopImage/TopImage";
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
      <AkademicsHistory />
      {/* menucha */}
      {/* Why Academics Works */}
      <Aforizms />
      {/* Our Teachers */}
      <Footer />
    </div>
  );
}

export default About;
