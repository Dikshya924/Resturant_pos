import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../stateProvider";
import "../../App.css";
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
      <img src={img} alt="images" />
      <h4 data-toggle="tooltip" data-placement="top" title={title}>
        {title}
      </h4>
      <span>{title}</span>
      <p>Rs. {price}</p>
    </Card__container>
  );
}
const Card__container = styled.div`
  width: 140px;
  height: auto;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  margin-bottom: 40px;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-top: -50px;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    width: 130px;
    height: auto;
  }
  h4 {
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
    position: relative;
  }
  span {
    visibility: hidden;
    position: absolute;
    z-index: 1;
  }
`;

export default MenuCard;
