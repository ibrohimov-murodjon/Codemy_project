import React from 'react';
import Text1 from './Text1';

const InfoComp1 = (props) => {
  return (
    <div className='infoComp1'>
      <div>
        <img src={props.Img} alt="" srcset="" className='infoImg' />
      </div>
      <div className='infoText1'>
        <Text1 Title='Why Academics Works' p1='Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?' p2='Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere.' />
      </div>
    </div>
  )
}

export default InfoComp1;

