import React from "react";
import CourseInfo from "../../Components/Courses/CoursesInfo/CoursesInfo";
import TopImage from "../../Components/TopImage/TopImage";
import MenuBar from "../../Components/MenuBar/MiddleMenu";
import Footer from "../../Components/Home/Footer/Footer";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Navbar from "../../Components/Home/Navbar/Navbar";

function Courses() {
  return (
    <div>
      <Navbar courses="Nactive" />
      <TopImage
        heading="Courses"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      <MenuBar currentPath="Courses" />
      <CourseInfo /> <br /> <br /> <br />
      <Aforizms />
      <Footer />
    </div>
  );
}

export default Courses;
