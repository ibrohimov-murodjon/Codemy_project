import React, { useState, useEffect } from "react";
import AboutHead from "./Container/AboutHead";
import AboutText from "./Container/AboutText";
import axios from "axios";
import AboutBtn from "./Container/AboutBtn";
import "./Container/About.css";
function About() {
  const [aboutItem, setAboutItem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/about").then((res) => {
      const fullItem = res.data;
      setAboutItem(fullItem);
    });
  }, [setAboutItem]);

  return (
    <div className="about-body">
      <div className="about-container">
        {aboutItem.map((item,index) => (
          <div key={index}>
            <div className="about-grid1"> 
              <AboutHead />
            </div>
            <div className="about-grid2">
              <AboutText head={aboutItem[0].title} parag={aboutItem[0].text} />
              <AboutBtn />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
