import React from "react";
import AforizmsCont from "./Container/AforizmsCont";
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


function Aforizms() {
  return <div className='aforizmContainer aforStyle-1' >
    <div className='aforizmWrapper'>
      
      <div className='aforow row1'>
        <SchoolIcon style={{color: '#51BE78'}} className='aforizmIcon' />
        <AforizmsCont title='Our Philosphy' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.' />
      </div>

      <div className='aforow row2'>
        <ImportContactsIcon style={{color: '#51BE78'}} className='aforizmIcon' />
        <AforizmsCont title='Academics Principle' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.' />
      </div>

      <div className='aforow row3'>
        <AccountBalanceIcon style={{color: '#51BE78'}} className='aforizmIcon' />
        <AforizmsCont title='Key of Success' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.' />
      </div>

    </div>
  </div>;
}

export default Aforizms;
