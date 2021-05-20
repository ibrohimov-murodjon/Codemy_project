import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "./Rating";
import Typography from "@material-ui/core/Typography";
import "./index.css";
import CoursesModal from "../../../Courses/CourseDetails/CourseDetails";

function CoursesList(props) {
  const [show, setShow] = useState(false);
  // const [data, setData] = useState({});
  return (
    <div className="card-container">
      <Card className="course-root">
        <CardActionArea className="CardAction">
          <CardMedia
            className="course-media"
            image={props.img}
            title="courseOne"
            onClick={() => setShow(true)}
          />
          <CardContent className="course-category">
            <h2 className="course-price">
              <span>$99.00</span>
            </h2>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="course-title"
            >
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="course-1-content">
          <h2 className="course-additTitle">{props.card_title}</h2>
          <Rating value={props.rating} readOnly className="course-rating" />
          <Typography variant="p" className="course-text">
            {props.card_text}
          </Typography>
          <a href="#" className="C-card-btn">
            enroll in this course
          </a>
        </div>
      </Card>
      <CoursesModal
        show={show}
        setShow={setShow}
        img={props.img}
        title={props.title}
        card_text={props.card_text}
        card_title={props.card_title}
        rating={props.rating}
      />
    </div>
  );
}

export default CoursesList;
