import React, { useState, useEffect } from "react";
import CoursesInfoList from "../../Home/Courses/components/CoursesList";
import axios from "axios";
import "./CoursesInfoCss.css";
import "../../Home/Courses/components/index.css";

function CoursesInfo() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/kurslar").then((res) => {
      const allCourses = res.data;
      setCourse(allCourses);
    });
  }, []);

  return (
    <div classsName="course-section">
      <div className="course-info-container">
        <div className="course-row">
          {course.map((demo, index) => (
            <div className="courseInfo" key={index}>
              <CoursesInfoList
                img={demo.img_url}
                title={demo.img_title}
                text={demo.card_text}
                card_title={demo.card_title}
                card_text={demo.card_text}
                rating={demo.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesInfo;
