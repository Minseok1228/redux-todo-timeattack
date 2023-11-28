import React from "react";
import styled from "styled-components";

function Header() {
  return <StHeader>ToDoLiSt</StHeader>;
}

export default Header;
const StHeader = styled.header`
  background-color: blue;
  font-size: larger;
  font-weight: 800;
`;
