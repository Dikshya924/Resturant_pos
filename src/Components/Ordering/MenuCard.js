import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../../stateProvider";
function MenuCard({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addItems = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        title: title,
        price: price,
      },
    });
  };
  return (
    <Card__container onClick={addItems}>
      <Items>
        <img src={img} alt="images" />
        <h4>{title}</h4>
        <p>Rs. {price}</p>
      </Items>
    </Card__container>
  );
}
const Card__container = styled.div`
  width: 100px;
  height: auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 130px;
    height: auto;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-top: -40px;
    border-radius: 50%;
  }
`;

export default MenuCard;
