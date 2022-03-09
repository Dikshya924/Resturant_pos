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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
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
            {/* <FastfoodIcon className="icon" /> */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/308/308099.png"
              width="20px"
              height="20px"
            />
            All
            {/* </div> */}
          </Cat>
          <Cat>
            <img
              src="../../../icons/hamburger.png"
              width="20px"
              height="20px"
            />
            Burger
          </Cat>
          <Cat>
            <img src="../../../icons/pizza.png" width="20px" height="20px" />
            Pizza
          </Cat>
          <Cat>
            <img src="../../../icons/noodles.png" width="20px" height="20px" />
            Noodles
          </Cat>
          <Cat>
            <img
              src="../../../icons/hamburger.png"
              width="20px"
              height="20px"
            />
            Burger
          </Cat>
          <Cat>
            <img
              src="../../../icons/hamburger.png"
              width="20px"
              height="20px"
            />
            Burger
          </Cat>
          <Cat>
            <img src="../../../icons/pizza.png" width="20px" height="20px" />
            Pizza
          </Cat>
          <Cat>
            <img src="../../../icons/noodles.png" width="20px" height="20px" />
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
          data-toggle="tooltip"
          data-placement="top"
          title="view all categories"
        />
      </SideButton>
    </Category>
  );
}
const Category = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 7px auto;
  background-color: white;
  align-items: center;
  .slick-arrow {
    color: #2c586e;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
  }
  .slick-arrow:hover,
  .slick-arrow:active {
    background-color: #8da1af;
    color: white;
  }
  .slick-slide {
    margin-right: 10px;
    margin-left: 10px;
  }
  .slick-prev {
    left: -10px !important;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Cat = styled.div`
  background-color: #f2f7fb;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  margin-bottom: 0px;
  text-align: center;
  cursor: pointer;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  .icon {
    color: #ff6565;
    margin-right: 10px;
  }
  &:hover,
  &:active {
    background-color: #2c586e;
    color: white;
  }
`;
const SideButton = styled.div`
  .p-button {
    background: #8da1af;
    border: 1px solid #8da1af;
    border-radius: 50%;
    &:hover {
      background: #8da1af;
      border: 1px solid #8da1af;
    }
  }
  .p-sidebar-headar {
  }
`;
const Category_List = styled.div`
  width: 90%;
`;
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
