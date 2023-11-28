// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const SWITCH_TODO = 'SWITCH_TODO'

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}
export const deleteTodo = (payload) => {//id
  return {
    type: DELETE_TODO,
    payload,
  }
}
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  }
}

const initialState = [

  {
    id: shortid.generate(),
    title: '제목1',
    contents: '내용1',
    isDone: true
  }, {
    id: shortid.generate(),
    title: '제목2',
    contents: '내용2',
    isDone: true
  }, {
    id: shortid.generate(),
    title: '제목3',
    contents: '내용3',
    isDone: false
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    case SWITCH_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
    default:
      return state;
  }
};

export default todos;
