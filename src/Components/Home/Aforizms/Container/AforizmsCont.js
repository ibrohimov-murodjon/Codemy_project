import React from 'react';
import Button from '@material-ui/core/Button';


const AforizmsCont = (props) => {
  return (
    <>
      <h3 className='afoTitle'>{props.title}</h3>
      <p className='afoText'>{props.text}</p>


      {/* <Button variant="contained" color="primary">
      Hello World
    </Button> */}
    </>
  )
}

export default AforizmsCont;
