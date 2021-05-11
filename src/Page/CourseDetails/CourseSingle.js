import React from "react";
import TopImage from "../../Components/TopImage/TopImage";
import MenuBar from "./MenuBarCourse/MiddleMenu";
import Footer from "../../Components/Home/Footer/Footer";
import Aforizms from "../../Components/Home/Aforizms/Aforizms";
import Navbar from "../../Components/Home/Navbar/Navbar";
import CourseDetails from "../../Components/Courses/CourseDetails/CourseDetails";

function CourseSingle() {
  return (
    <div>
      <Navbar home="HomeNoactive" courses="Nactive" />
      <TopImage
        heading="How To Create Mobile Apps Using Ionic"
        lorem="Lorem ipsum dolor sit amet consectetur adipisicing."
      />
      <MenuBar currentPath="Courses" />
      <CourseDetails /> <br /> <br />
      <Aforizms />
      <Footer />
    </div>
  );
}

export default CourseSingle;
