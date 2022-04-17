import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../image/banner/jill-heyer-toxlLueLNDs-unsplash.jpg";
import img2 from "../../image/banner/vegetables-set-left-black-slate.jpg";
import img3 from "../../image/banner/roasted-pork-steak-dark-wooden-surface.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="top-0 mt-5">
            <h1 className="font-style">
              Bringing You The Original Taste of Home
            </h1>
            <p>
              <span className="font-style">
                Serving The Premium Taste of Mughals is Our Moto
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption className="top-0 mt-5">
            <h1 className="font-style">
              Bringing You The Original Taste of Home
            </h1>
            <p>
              <span className="font-style">
                Serving The Premium Taste of Mughals is Our Moto
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption className="top-0 mt-5">
            <h1 className="font-style">
              Bringing You The Original Taste of Home
            </h1>
            <p>
              <span className="font-style">
                Serving The Premium Taste of Mughals is Our Moto
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
