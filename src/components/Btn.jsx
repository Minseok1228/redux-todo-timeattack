import React from "react";
import styled from "styled-components";

function Btn({ btntype, clickfunc }) {
  return <StBtn onClick={clickfunc}>{btntype}</StBtn>;
}

export default Btn;
const StBtn = styled.button`
  cursor: pointer;
`;
