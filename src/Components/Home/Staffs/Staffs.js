import React from "react";
import OwlCarousel from "react-owl-carousel2";
import StaffItem from "./Container/StaffItem";

import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Staffs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        <div key={1} className="item">
          <StaffItem img="/images/person_1.jpg" />
          <StaffItem img="/images/person_2.jpg" />
        </div>,
        <div key={2} className="item">
          <StaffItem img="/images/person_3.jpg" />
          <StaffItem img="/images/person_4.jpg" />
        </div>,
        <div key={3} className="item">
          <StaffItem img="/images/person_1.jpg" />
          <StaffItem img="/images/person_2.jpg" />
        </div>,
      ],

      itemNo: 1,
      loop: true,
      nav: false,
      rewind: true,
      autoplay: true,
    };
  }

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
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
      <div className="StaffMainContainer">
        <span className="staffheader">Xodimlar</span>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>
      </div>
    );
  }
}

export default Staffs;
