import { FC } from "react";
import todoVar, { TodoProps } from "../stores/todo";

interface TodoListProps {
  todo: TodoProps;
}

const TodoItem: FC<TodoListProps> = ({ todo }) => {
  const removeItem = () => {};
  return (
    <div>
      <input type="checkbox" />
      <span>{todo.content}</span>
      <span onClick={removeItem}>😡</span>
    </div>
  );
};

export default TodoItem;
