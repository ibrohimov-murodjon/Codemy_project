import React, { useState, useEffect } from "react";
import "./proglang.css";
import Plcomponent from "./Plcomponent";
import axios from "axios";

function Proglang() {
  const [proglang, setProglang] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/proglang").then((res) => {
      const fullItem = res.data;
      setProglang(fullItem);
    });
  }, [setProglang]);

  return (
    <div className="PL-container">
      <h1 className="PL-header">Dasturlash tillari</h1>
      <div className="PL-box">
        {proglang.map((demo, index) => (
          <Plcomponent
            key={index}
            title={demo.img_title}
            descibetion={demo.text}
            imguri={demo.img_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Proglang;
