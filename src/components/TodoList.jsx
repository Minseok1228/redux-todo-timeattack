import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import PrintTodo from "./PrintTodo";
import Btn from "./Btn";

function TodoList({ isDone }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const FilterTodo = todos.filter((todo) => todo.isDone === isDone);
  const onHandleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };
  const onHandleSwitch = (id) => {
    dispatch(switchTodo(id));
  };
  const onNavigateDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <ToDoList>
      <span>{isDone ? "완료한 일" : "할 일"}</span>
      {FilterTodo.map((todo) => {
        return (
          <ToDoCard key={todo.id}>
            <NavigateBox onClick={() => onNavigateDetail(todo.id)}>
              <PrintTodo todo={todo} size={"home"} />
            </NavigateBox>
            <section>
              <Btn
                btntype={isDone ? "취소" : "완료"}
                clickfunc={() => onHandleSwitch(todo.id)}
              />
              <Btn btntype={"삭제"} clickfunc={() => onHandleDelete(todo.id)} />
            </section>
          </ToDoCard>
        );
      })}
    </ToDoList>
  );
}

export default TodoList;
const ToDoList = styled.ul``;
const ToDoCard = styled.li`
  background-color: yellow;
  margin: 10px;
  padding: 10px;
  width: 300px;
`;
const NavigateBox = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
