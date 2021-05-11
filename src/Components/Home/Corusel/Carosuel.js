import React from "react";
import OwlCarousel from "react-owl-carousel2";
import CarouselItem from "./Container/CarouselItem";
import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Carousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        <div key={1} >
          <CarouselItem  title="acdemics  university" />
        </div>,
        <div key={2} >
             <CarouselItem  title="you can learn anything"  />
        </div>,
       
      ],

      itemNo: 1,
      loop: true,
      nav: true,
      navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
      rewind: true,
      autoplay: true,
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


    return (
      <div>
        <OwlCarousel ref="car" options={options}>
          {this.state.items}
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
