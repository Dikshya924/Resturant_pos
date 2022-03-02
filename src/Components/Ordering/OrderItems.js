import React from "react";
import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useStateValue } from "../../stateProvider";
function OrderItems({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Order>
      <Item__info>
        <Item__image>
          <img src={img} />
          <Item__detail>
            <p>{title}</p>
            <p>Rs. {price}</p>
          </Item__detail>
        </Item__image>
        <Pricing>
          <Item__quantity>
            <input type="text" placeholder="1" />
            <p>Rs 1000</p>
          </Item__quantity>
          <Item__remove>
            <DeleteOutlineOutlinedIcon onClick={removeItem} />
          </Item__remove>
        </Pricing>
      </Item__info>
    </Order>
  );
}
const Order = styled.div`
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 15px;
`;
const Order_Item = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item__info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 10px;
  margin-bottom: 10px; */
`;
const Item__image = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Item__quantity = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 30px;
    text-align: center;
  }
`;
const Item__remove = styled.div`
  color: rgb(188, 5, 69);
  cursor: pointer;
`;
const Item__detail = styled.div``;
const Pricing = styled.div``;

export default OrderItems;
