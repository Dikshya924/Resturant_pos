import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Table() {
  return (
    <Table_Container>
      <Link to="/">
        <Count>Table no 1</Count>
      </Link>

      <Count>Table no 2</Count>
      <Count>Table no 3</Count>
      <Count>Table no 3</Count>
    </Table_Container>
  );
}
const Table_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Count = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: auto;
`;

export default Table;
