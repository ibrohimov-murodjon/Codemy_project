import React from "react";
import "./AboutT.css"
import Atcomponent from "./Atcomponent"
import { AtData } from "./AtFakedb";
function AboutTeachers() {
  return (
    <div className="At-container">
      <h1 className="At-header">Our Teachers</h1>
      <div className="At-box">
        {AtData.map((data, id)=>(
          <Atcomponent key={id} title={data.title} descibetion={data.descipetion} imguri={data.imguri} />
        ))}
        
        
      </div>
    </div>
  )
}

export default AboutTeachers;
