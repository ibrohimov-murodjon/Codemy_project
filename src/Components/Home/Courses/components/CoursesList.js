import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "material-ui-rating";
import Typography from "@material-ui/core/Typography";
import "./index.css";

function CoursesList(props) {
  return (
    <div className="card-container">
      <Card className="course-root">
        <CardActionArea className="CardAction">
          <CardMedia
            className="course-media"
            image={props.img}
            title="courseOne"
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
              Web Design {/* {title} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="course-1-content">
          <h2 className="course-additTitle">
            How To Create Mobile Apps Using Ionic
          </h2>
          <Rating
            value={5}
            max={5}
            onChange={(i) => console.log("onChange " + i)}
            readOnly
            className="course-rating"
          />
          <Typography variant="p" className="course-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            accusantium ipsam.
            {/* {text} */}
          </Typography>
          <a href="#" className="C-card-btn">
            enroll in this course
          </a>
        </div>
      </Card>
    </div>
  );
}

export default CoursesList;
