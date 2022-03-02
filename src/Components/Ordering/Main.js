import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchBar from "material-ui-search-bar";
import Product from "../Data/product.json";
import { useStateValue } from "../../stateProvider";
import Scrollbars from "react-custom-scrollbars";
import Orders from "./Orders";
function Main() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <MainContainer>
      <RightSide>
        <Category>
          <ArrowBackIosIcon className="icon" />
          <li className="active">All</li>
          <li>Chinese</li>
          <li>Korean</li>
          <li>Thai</li>
          <li>Japanese</li>
          <li>Korean</li>
          <li>Thai</li>
          <ArrowForwardIosIcon className="icon" />
        </Category>
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
      <Order>
        <Orders />
      </Order>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
const RightSide = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(241, 247, 252); */
  background-color: rgba(0, 0, 0, 0.03);
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
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
    grid-template-columns: repeat(3, 0fr);
    column-gap: 10px;
  }
`;
const Order = styled.div`
  width: 27%;
  height: 100%;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 200px;
  }
`;

const Category = styled.ul`
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  width: 90%;
  list-style: none;
  border-radius: 20px;
  margin-bottom: 10px;
  .icon {
    color: #2c586e;
    cursor: pointer;
  }
  li {
    /* border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px; */
    padding: 10px;
    margin-right: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  li.active {
    border: 1px solid #2c586e;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export default Main;
