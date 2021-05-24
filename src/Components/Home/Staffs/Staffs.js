import React from "react";
import OwlCarousel from "react-owl-carousel2";
import StaffItem from "./Container/StaffItem";
import axios from 'axios';

import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Staffs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      size: window.innerWidth,
      items: [


        // <div key={2} className="item">
        //   <StaffItem img="/images/person_2.jpg" />
        // </div>,
        // <div key={3} className="item">
        //   <StaffItem img="/images/person_3.jpg" />
        // </div>,
        // <div key={4} className="item">
        //   <StaffItem img="/images/person_4.jpg" />
        // </div>,
        // <div key={5} className="item">
        //   <StaffItem img="/images/person_1.jpg" />
        // </div>,
        // <div key={6} className="item">
        //   <StaffItem img="/images/person_2.jpg" />
        // </div>,
      ],

      itemNo: 2,
      loop: true,
      nav: false,
      dotsClass: "owl-dotsStaff",
      rewind: true,
      autoplay: true,
    };
  }
  // newwwwww
  checkSize = () => {
    this.setState({ ...this.state, size: window.innerWidth });
    // console.log(this.state);
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
  

  componentDidMount() {
    axios.get('http://localhost:8080/api/staff').then(res => {
      const allStaffs = res.data;     
      var b = allStaffs.map((val, index) => {
        return(
        <div key={index} className="item">
        <StaffItem img={val.img_url} name={val.name} surname={val.surname} experience={val.experience} />
      </div>
        )
      })
      this.setState({...this.state, items: b})
      this.checkSize();
      window.addEventListener("resize", this.checkSize);
      return () => {
        window.removeEventListener("resize", this.checkSize);
      };
    }, []);
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
      onDragged: function (event) {
      },
      onChanged: function (event) {
      },
      onTranslate: function (event) {
      },
    };

    return (
      <div className="StaffMainContainer">
        <span className="staffheader">Xodimlar</span>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>
      </div>
    )
  }
}

export default Staffs;
