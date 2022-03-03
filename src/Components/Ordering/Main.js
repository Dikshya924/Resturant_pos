import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import Product from "../Data/product.json";
import { useStateValue } from "../../stateProvider";
import Scrollbars from "react-custom-scrollbars";
import Orders from "./Orders";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carausol from "./Carausol";

function Main() {
  const [{ basket }, dispatch] = useStateValue();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <MainContainer>
      <RightSide>
        <Carausol />
        <Scrollbars>
          <Menu>
            {Product.map((product) => {
              return (
                <MenuCard
                  id={product.id}
                  img={product.img}
                  title={product.name}
                  price={product.price}
                />
              );
            })}
          </Menu>
        </Scrollbars>
      </RightSide>
      <Leftside>
        <Orders />
      </Leftside>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightSide = styled.div`
  width: 70%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(241, 247, 252); */
  background-color: rgba(0, 0, 0, 0.03);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0fr);
  column-gap: 40px;
  row-gap: 10px;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 0fr);
    column-gap: 20px;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 0fr);
    column-gap: 20px;
    justify-content: center;
  }
`;
const Leftside = styled.div`
  width: 30%;
  height: 85vh;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    height: 100%;
  }
`;

export default Main;
