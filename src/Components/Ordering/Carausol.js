import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import styled from "styled-components";
function Carausol() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Category>
      <Slider {...settings}>
        <Cat>
          {/* <div className="slide-box d-dlex"> */}
          <FastfoodIcon className="icon" />
          All
          {/* </div> */}
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Burger
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Pizza
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Noodles
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Burger
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Pizza
        </Cat>
        <Cat>
          <FastfoodIcon className="icon" />
          Noodles
        </Cat>
      </Slider>
    </Category>
  );
}
const Category = styled.div`
  width: 90%;
  margin: auto;
  .slick-arrow {
    background-color: #2c586e;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .slick-arrow:hover,
  .slick-arrow:active {
    background-color: #2c586e;
  }
  .slick-slide {
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Cat = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  margin-bottom: 0px;
  text-align: center;
  cursor: pointer;
  display: flex !important;
  justify-content: center;
  align-items: center;
  .icon {
    color: #2c586e;
    margin-right: 10px;
  }
  &:hover,
  &:active {
    border: 1px solid #2c586e;
  }
`;
export default Carausol;
