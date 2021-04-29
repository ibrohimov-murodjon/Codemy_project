import React from "react";
import "./proglang.css"
import Plcomponent from "./Plcomponent"
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
function Proglang() {
  return (
    <div className="PL-container">
      <h1 className="PL-header">Dasturlash tillari</h1>
      <div className="PL-box">
        <Plcomponent title="Personalize Learning" descibetion="Lorem who am i ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem." imguri={<SchoolOutlinedIcon className="PL-icon"/>} />
        <Plcomponent title="Trusted Courses" descibetion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem." imguri={<MenuBookOutlinedIcon  className="PL-icon"/>} />
        <Plcomponent title="Tools for Students" descibetion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem." imguri={<AccountBalanceOutlinedIcon className="PL-icon" />} />
      </div>
    </div>
  )
}

export default Proglang;
