import React from 'react';

const AforizmsCont = (props) => {
  return (
    <>
      <h3 className='afoTitle'>{props.title}</h3>
      <p className='afoText'>{props.text}</p>
    </>
  )
}

export default AforizmsCont;
