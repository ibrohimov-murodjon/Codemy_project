import React from 'react';
import InfoComp1 from './InfoComp/InfoComp1';
import InfoComp2 from './InfoComp/InfoComp2';
import Img1 from './images/course_4.jpg';
import Img2 from './images/course_5.jpg';

const Info = () => {
  return (
    <div className='info'>
      <div className='infoWrapper'>
        <InfoComp1 Img={Img1} />
        <InfoComp2 Img={Img2} />
      </div>
    </div>
  )
}

export default Info
