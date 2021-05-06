import React from "react";
import CourseList from "./components/CoursesList";
import OwlCarousel from "react-owl-carousel2";
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
        <div className="owl-item" key={1}>
          <CourseList img="./images/course_1.jpg" />
        </div>,
        <div className="owl-item" key={2}>
          <CourseList img="./images/course_2.jpg" />
        </div>,
        <div className="owl-item" key={3}>
          <CourseList img="./images/course_3.jpg" />
        </div>,
        <div className="owl-item" key={4}>
          <CourseList img="./images/course_4.jpg" />
        </div>,
        <div className="owl-item" key={5}>
          <CourseList img="./images/course_5.jpg" />
        </div>,
        <div className="owl-item" key={6}>
          <CourseList img="./images/course_6.jpg" />
        </div>,
      ],

      itemNo: 3,
      loop: true,
      nav: true,
      navText: [
        "<i class='fa fa-arrow-left course-prev' ></i>",
        "<i class='fa fa-arrow-right course-next'></i>",
      ],
      dotsClass: "owl-dots3",
      rewind: true,
      autoplay: true,
    };
  }

  checkSize = () => {
    this.setState({ ...this.state, size: window.innerWidth });
    if (this.state.size < 2000) {
      this.setState({ ...this.state, itemNo: 3 });
    }
    if (this.state.size < 1202) {
      this.setState({ ...this.state, itemNo: 2 });
    }
    if (this.state.size < 700) {
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
      dotsClass: this.state.dotsClass,
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
          <p className="course-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            id?
          </p>
        </div>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>
      </div>
    );
  }
}

export default Courses;
