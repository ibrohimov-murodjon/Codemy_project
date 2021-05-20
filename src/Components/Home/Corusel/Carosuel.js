import React from "react";
import OwlCarousel from "react-owl-carousel2";
import CarouselItem from "./Container/CarouselItem";
import axios from "axios";
import "./js/owl.theme.default.css";
import "./js/owl.carousel.css";
import "./js/style.css";

class Carousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [],
      itemNo: 1,
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

  componentDidMount() {
    axios.get("http://localhost:8080/api/carousel").then((res) => {
      const fullCarousel = res.data;
      var a = fullCarousel.map((val, ind) => {
        return (
          <div key={ind}>
            <CarouselItem title={val.title} img={val.img_url} />
          </div>
        );
      });
      this.setState({ ...this.state, items: a });
      console.log({ ...this.state });
    }, []);
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
        // console.log("onDragged: " + event.type);
      },
      onChanged: function (event) {
        // console.log("onChanged: " + event.type);
      },
      onTranslate: function (event) {
        // console.log("onTranslate: " + event.type);
      },
    };

    return (
      <div>
        <OwlCarousel ref="car" options={options} events={events}>
          {this.state.items}
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
