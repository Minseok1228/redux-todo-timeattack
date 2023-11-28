import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PrintTodo from "../components/PrintTodo";
import { deleteTodo } from "../redux/modules/todos";
import Btn from "../components/Btn";

const Detail = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const loaction = useLocation().pathname.split("/")[2];
  const detailTodo = todos.find((todo) => todo.id === loaction);
  const onHandleNavagate = () => navigate("/");
  const dispatch = useDispatch();
  const onHandleDelete = (id) => {
    navigate("/");
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <PrintTodo todo={detailTodo} size={"detail"} />
      <Btn btntype={"이전으로"} clickfunc={onHandleNavagate} />
      <Btn btntype={"삭제"} clickfunc={() => onHandleDelete(detailTodo.id)} />
    </>
  );
};

export default Detail;
