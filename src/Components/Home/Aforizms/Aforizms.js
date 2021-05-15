import React, { useState, useEffect } from "react";
import AforizmsCont from "./Container/AforizmsCont";
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import axios from 'axios'; // +

function Aforizms() {
const [aforizm, setAforizm] = useState([]); // +
useEffect(() => {
  axios.get("http://localhost:8080/api/aforizm").then((res) => {
    const fullAforizm = res.data;
    setAforizm(fullAforizm)
  })
}, [setAforizm]) // +

  return <div className='aforizmContainer aforStyle-1' >
    <div className='aforizmWrapper'>
      {aforizm.map((demo, index) => (
      <div className='aforow row1' key={index}>
        <img src={demo.img_url} alt={demo.title} className='aforizmIcon' />
        <AforizmsCont title={demo.title} text={demo.text} />
      </div>
      ))}

      {/* <div className='aforow row2'>
      <img src='/images/tools.png' alt='tools' className='aforizmIcon' />
        <AforizmsCont title='Academics Principle' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.' />
      </div>

      <div className='aforow row3'>
      <img src='/images/university.png' alt='university' className='aforizmIcon' />
        <AforizmsCont title='Key of Success' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.' />
      </div> */}

    </div>
  </div>;
}

export default Aforizms;
