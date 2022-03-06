import React from "react";
import styled from "styled-components";
import $ from "jquery";
function Toogles() {
  const handleClick = () => {
    $(".show").slideToggle("slow");
  };
  return (
    <Container>
      <First onClick={handleClick}>Click me</First>
      <Second className="show">SHow Text</Second>
    </Container>
  );
}

const Container = styled.div``;
const First = styled.div`
  padding: 5px;
  text-align: center;
  background-color: #e5eecc;
  border: solid 1px #c3c3c3;
`;
const Second = styled.div`
  padding: 5px;
  text-align: center;
  background-color: #e5eecc;
  border: solid 1px #c3c3c3;
  display: none;
`;
export default Toogles;
