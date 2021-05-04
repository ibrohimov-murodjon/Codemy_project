import React from "react";
import CoursesInfoList from "../../Home/Courses/components/CoursesList";
import "./CoursesInfoCss.css";
import "../../Home/Courses/components/index.css";

function CoursesInfo() {
  return (
    <div classsName="course-section">
      <div className="course-info-container">
        <div className="course-row">
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_1.jpg" />
          </div>
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_2.jpg" />
          </div>
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_3.jpg" />
          </div>
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_4.jpg" />
          </div>
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_5.jpg" />
          </div>
          <div className="courseInfo">
            <CoursesInfoList img="./images/course_6.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesInfo;
