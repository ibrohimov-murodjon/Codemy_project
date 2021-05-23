import React from "react";
import CourseList from "./components/CoursesList";
import OwlCarousel from "react-owl-carousel2";
import axios from "axios";
import "./components/index.css";
import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      size: window.innerWidth,
      items: [],
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
    if (this.state.size < 701) {
      this.setState({ ...this.state, itemNo: 1 });
    }
  };
  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    return () => {
      window.removeEventListener("resize", this.checkSize);
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/kurslar").then((res) => {
      this.setState({ ...this.state, items: res.data });
    }, []);
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

    return this.state.items.length > 0 ? (
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
        <OwlCarousel ref="car" options={options}>
          {this.state.items.map((val, ind) => {
            return (
              <div className="owl-item" key={ind}>
                <CourseList
                  img={val.img_url}
                  title={val.img_title}
                  card_title={val.card_title}
                  card_text={val.card_text}
                  rating={val.rating}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    ) : null;
  }
}

export default Courses;
