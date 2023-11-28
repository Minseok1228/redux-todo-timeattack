import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function Form() {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const dispatch = useDispatch();

  const onHandleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onHandleChangecontents = (e) => {
    setContents(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해 주세요");
      return;
    }
    if (!contents) {
      alert("내용을 입력해 주세요");
      return;
    }
    const newTodo = {
      id: shortid.generate(),
      title,
      contents,
      isDone: false,
    };
    console.log(newTodo);
    dispatch(addTodo(newTodo));
    setTitle("");
    setContents("");
  };
  return (
    <ToDoBox>
      <ToDoForm onSubmit={(e) => onHandleSubmit(e)}>
        <section>
          <span>제 목 : </span>
          <input value={title} onChange={(e) => onHandleChangeTitle(e)} />
        </section>
        <section>
          <span>내 용 : </span>
          <input value={contents} onChange={(e) => onHandleChangecontents(e)} />
        </section>
        <button>제출하기</button>
      </ToDoForm>
    </ToDoBox>
  );
}

export default Form;
const ToDoBox = styled.div``;
const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
