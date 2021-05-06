import React from "react";
import Text2 from "./Text2";

const InfoComp2 = (props) => {
  return (
    <div className='infoComp2'>
      <div className='infoText2'>
        <Text2 Title="Personalized Learning" p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?" p2="Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere." />
      </div>
      <div>
        <img src={props.Img} alt="" srcset="" className='infoImg infoImg2' />
      </div>
    </div>
  );
};

export default InfoComp2;
