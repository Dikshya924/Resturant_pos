import React from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import { useStateValue } from "../../stateProvider";
import OrderItems from "./OrderItems";
function Orders() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Order_data>
      <Order_type>
        <h4>#orders 1234</h4>
        <p>
          Table No: 12
        </p>
        <select>
          <option>Dine In</option>
          <option>Take away</option>
          <option>Delivery</option>
        </select>
      </Order_type>
      <Items>
        <Scrollbars>
          {basket.map((item) => (
            <OrderItems
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </Scrollbars>
      </Items>
      <Subtotal>
        <p>
          Subtotal <span>Rs 1000</span>
        </p>
        <p>
          Tax 10% (VAT included) <span>Rs. 100</span>
        </p>
        <p>
          Total <span>Rs. 1100</span>
        </p>
        <Sub_button>
          <button>Place Order</button>
        </Sub_button>
      </Subtotal>
    </Order_data>
  );
}
const Order_data = styled.div`
  height: 80vh;
`;
const Order_type = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  justify-content: space-between;
  select{
    border:1px solid #2c586e;
    padding: 5px;
  }
`;
const Items = styled.div`
  width: 100%;
  height: 300px;
`;
const Subtotal = styled.div`
  width: 100%;
  justify-content: space-between;
  p {
    display: flex;
    justify-content: space-between;
    line-height: 2;
    span{
      font-weight: bold;
    }
  }
`;
const Sub_button = styled.div`
  width: 100%;
  button {
    width: 100%;
    padding: 20px;
    border: none;
    color: white;
    background-color: #2c586e;
    cursor: pointer;
  }
`;
export default Orders;
