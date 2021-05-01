import React from "react";
import CourseList from "./components/CoursesList";
// import { Data } from "./components/Data";
import OwlCarousel from "react-owl-carousel2";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import "./components/index.css";
import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      size: window.innerWidth,
      items: [
        <div className="course-courses" key={1}>
          {/* {Data.map((data) => {
            return <CourseList {...data} key={data.id} />;
          })} */}
          <CourseList img="./images/course_2.jpg" />
        </div>,
        <div className="course-courses" key={2}>
          <CourseList img="./images/course_1.jpg" />
        </div>,
        <div className="course-courses" key={3}>
          <CourseList img="./images/course_3.jpg" />
        </div>,
        <div className="course-courses" key={4}>
          <CourseList img="./images/course_4.jpg" />
        </div>,
        <div className="course-courses" key={5}>
          <CourseList img="./images/course_5.jpg" />
        </div>,
      ],

      itemNo: 3,
      loop: true,
      nav: true,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
      rewind: true,
      autoplay: true,
    };
  }

  checkSize = () => {
    this.setState({ ...this.state, size: window.innerWidth });
    // console.log(this.state);
    if (1100 < this.state.size) {
      this.setState({ ...this.state, itemNo: 3 });
    }
    if (this.state.size < 1024) {
      this.setState({ ...this.state, itemNo: 2 });
    }
    if (this.state.size < 620) {
      this.setState({ ...this.state, itemNo: 1 });
    }
  };
  componentDidMount() {
    this.checkSize();
    console.log("useEffect");
    window.addEventListener("resize", this.checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", this.checkSize);
    };
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      navText: this.state.navText,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay,
    };

    const events = {
      onDragged: function (event) {
        console.log("onDragged: " + event.type);
      },
      onChanged: function (event) {
        console.log("onChanged: " + event.type);
      },
      onTranslate: function (event) {
        console.log("onTranslate: " + event.type);
      },
    };

    return (
      <div className="course-container">
        <div className="course-kurslar">
          <h2 className="section-title-underline">
            <span className="course-span">Kurslar</span>
          </h2>
        </div>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>
      </div>
    );
  }
}

// function Courses() {
//   return (
//     <>
//       <div className="course-kurslar">
//         <h2 className="section-title-underline">
//           <span className="course-span"> Kurslar</span>
//         </h2>
//       </div>
//       <div className="course-courses">
//         {Data.map((data) => {
//           return <CourseList {...data} key={data.id} />;
//         })}
//       </div>
//     </>
//   );
// }

export default Courses;
