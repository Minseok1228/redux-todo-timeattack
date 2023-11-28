import React from "react";
import styled, { css } from "styled-components";

function PrintTodo({ todo, size }) {
  return (
    <>
      <SizeBox size={size}>
        <section>
          <span>제목 :</span>
          <span>{todo.title}</span>
        </section>
        <section>
          <span>내용 :</span>
          <span>{todo.contents}</span>
        </section>
        {size === "detail" ? (
          <section>
            <span>완료여부 :</span>
            <span>{todo.isDone.toString()}</span>
          </section>
        ) : (
          ""
        )}
      </SizeBox>
    </>
  );
}

export default PrintTodo;
const SizeBox = styled.div`
  padding: 20px;
  width: 300px;
  ${({ size }) => {
    if (size === "detail") {
      console.log(size);
      return css`
        background-color: green;
      `;
    }
  }}
`;
