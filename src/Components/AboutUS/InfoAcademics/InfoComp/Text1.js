import React from 'react';

const Text1 = (props) => {
  return (
    <div className='infoText'>
      <div className='infoTextWrapper'>
        <div className='infoTitle1'>
          {props.Title}
        </div>
        <div className='infop1'>
          {props.p1}
        </div>
        <div className='infop2'>
          {props.p2}
        </div>
      </div>
    </div>
  )
}

export default Text1
