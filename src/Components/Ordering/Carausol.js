import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import styled from "styled-components";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
function Carausol() {
  const [visibleLeft, setVisibleLeft] = useState(false);
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
      <Category_List>
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
      </Category_List>
      <SideButton>
        <Sidebar
          visible={visibleLeft}
          onHide={() => setVisibleLeft(false)}
          style={{ width: 500 }}
        >
          <h3>All Categories</h3>
          <All>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
            <Product>
              <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" />
              <h3>Pasta</h3>
            </Product>
          </All>
        </Sidebar>
        <Button
          icon="pi pi-arrow-right"
          onClick={() => setVisibleLeft(true)}
          className="mr-2"
        />
      </SideButton>
    </Category>
  );
}
const Category = styled.div`
  width: 90%;
  margin: auto;
  /* .slick-arrow {
    background-color: #2c586e;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .slick-arrow:hover,
  .slick-arrow:active {
    background-color: #2c586e;
  } */
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
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
const SideButton = styled.div``;
const Category_List = styled.div``;
const All = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;
const Product = styled.div`
  margin-top: 20px;
  width: 120px;
  height: 130px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.08);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: 10px;
  }
`;
export default Carausol;
