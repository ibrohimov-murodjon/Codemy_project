import React from 'react'
import TopImage from "../../Components/TopImage/TopImage";
import MenuBar from "../../Components/MenuBar/MiddleMenu";
import Footer from "../../Components/Home/Footer/Footer";
import AdmissionList from '../../Components/Admission/AddmisionList';
const Admission = () => {
    return (
        <div>
          <TopImage
          heading="Admission"
          lorem="Lorem ipsum dolor sit amet consectetur adipisicing."/> 
           
           <MenuBar currentPath="Admission" />
            <AdmissionList/>
            <Footer/>
        </div>
    )
}

export default Admission
