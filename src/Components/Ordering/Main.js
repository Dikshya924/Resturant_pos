import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import Product from "../Data/product.json";
import Scrollbars from "react-custom-scrollbars";
import Orders from "./Orders";
// import "./Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carausol from "./Carausol";
import SidebarDemo from "./SidebarDemo";

function Main() {
  return (
    <MainContainer>
      <RightSide>
        <Carausol />
        <Scrollbars>
          <Menu className="main">
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
  margin: 0;
  padding: 0;
  @media (min-width: 0px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
const RightSide = styled.div`
  width: 70vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(241, 247, 252); */
  background-color: rgba(0, 0, 0, 0.03);
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
  }
`;
const Menu = styled.div`
  display: flex;
  /* grid-template-columns: repeat(5, 0fr); */
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 40px;
  row-gap: 10px;
  margin-top: 30px;
  width: 100%;
`;
const Leftside = styled.div`
  width: 30vw;
  height: 85vh;
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

export default Main;
