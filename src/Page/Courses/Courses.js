import React from "react";
import CourseInfo from "../../Components/Courses/CoursesInfo/CoursesInfo";
import TopImage from "../../Components/TopImage/TopImage";
import MenuBar from "../../Components/MenuBar/MiddleMenu";
import Footer from "../../Components/Home/Footer/Footer";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";

function Courses() {
  return (
    <div>
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
