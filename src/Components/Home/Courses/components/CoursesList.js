import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Rating from "material-ui-rating";
import Typography from "@material-ui/core/Typography";
import "./index.css";

const useStyles = makeStyles({
  margin: {
    marginBottom: "1.5rem",
    color: "white",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
function CoursesList(props) {
  const classes = useStyles();
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
              <span>$ 99</span>
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
        <div>
          <Typography className="course-additTitle" variant="h5">
            How To Create Mobile Apps Using Ionic
            {/* {additTitle} */}
          </Typography>
          <Rating
            value={5}
            max={5}
            onChange={(i) => console.log("onChange " + i)}
            readOnly
            className="course-rating"
          />
          <Typography variant="h6" className="course-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            accusantium ipsam.
            {/* {text} */}
          </Typography>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              enroll in this course
            </Button>
          </ThemeProvider>
        </div>
      </Card>
    </div>
  );
}

export default CoursesList;
