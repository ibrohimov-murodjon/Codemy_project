import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./CourseDetailsCss.css";

function CourseDetails() {
  return (
    <div className="courseDetails">
      <div className="adminimg">
        <img src="/images/course_5.jpg" className="mediaImage" alt="" />
      </div>

      <div className="addHeaderTit1">
        <span className="title">Course Details</span>

        <p className="addTit1">
          <strong className="courseTeacher">Teacher:</strong>
          <p>Craig Daniel</p>
        </p>

        <p className="courseTime">
          <strong className="courseTeacher courseTeacher2">Hours:</strong>
          <p>8:00 am — 9:30am</p>
        </p>

        <p className="addTit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
          dolore libero corrupti! Itaque, delectus?
        </p>

        <p className="addTit">
          Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit
          placeat nesciunt, voluptatum totam facere.
        </p>
        <ul className="ul-check">
          <li className="addFlex">
            <CheckIcon className="checkIcon" />
            <p className="checkTitleCourse">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </li>
          <li className="addFlex">
            <CheckIcon className="checkIcon" />
            <p className="checkTitleCourse">consectetur adipisicing</p>
          </li>
          <li className="addFlex">
            <CheckIcon className="checkIcon" />
            <p className="checkTitleCourse">Sit dolor repellat esse</p>
          </li>
          <li className="addFlex">
            <CheckIcon className="checkIcon" />
            <p className="checkTitleCourse">Necessitatibus</p>
          </li>
          <li className="addFlex">
            <CheckIcon className="checkIcon" />
            <p className="checkTitleCourse">Sed necessitatibus itaque</p>
          </li>
        </ul>
        <p className="enrollButton">
          <a href="#" className="enrollPrimary">
            Enroll
          </a>
        </p>
      </div>
    </div>
  );
}

export default CourseDetails;
