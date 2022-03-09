import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
function TableUI() {
  return (
    <Draggable>
      <Table>I can now be moved around!</Table>
    </Draggable>
  );
}
const Table = styled.div`
  cursor: pointer;
`;
export default TableUI;
