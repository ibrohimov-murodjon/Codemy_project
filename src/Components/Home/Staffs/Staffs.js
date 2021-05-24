import React from "react";
import OwlCarousel from "react-owl-carousel2";
import StaffItem from "./Container/StaffItem";
import axios from "axios";

import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Staffs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      size: window.innerWidth,
      items: [],
      itemNo: 2,
      loop: true,
      nav: false,
      dotsClass: "owl-dotsStaff",
      rewind: true,
      autoplay: true,
    };
  }
  checkSize = () => {
    this.setState({ ...this.state, size: window.innerWidth });
    if (1100 < this.state.size) {
      this.setState({ ...this.state, itemNo: 2 });
    }
    if (this.state.size < 1100) {
      this.setState({ ...this.state, itemNo: 2 });
    }
    if (this.state.size < 620) {
      this.setState({ ...this.state, itemNo: 1 });
    }
  };
  // componentDidMount() {
  //   this.checkSize();
  //   window.addEventListener("resize", this.checkSize);
  //   return () => {
  //     window.removeEventListener("resize", this.checkSize);
  //   };
  // }
  componentDidMount() {
    axios.get("http://localhost:8080/api/staff").then((res) => {
      this.setState({ ...this.state, items: res.data });
    }, []);
    ///checkSize
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
    return () => {
      window.removeEventListener("resize", this.checkSize);
    };
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      dotsClass: this.state.dotsClass,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay,
    };

    const events = {
      onDragged: function (event) {},
      onChanged: function (event) {},
      onTranslate: function (event) {},
    };

    return this.state.items.length > 0 ? (
      <div className="StaffMainContainer">
        <span className="staffheader">Xodimlar</span>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items.map((val, index) => {
            return (
              <div key={index} className="item">
                <StaffItem
                  img={val.img_url}
                  name={val.name}
                  surname={val.surname}
                  experience={val.experience}
                />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    ) : null;
  }
}

export default Staffs;
