import { FC } from "react";
import { useReactiveVar, useQuery } from "@apollo/client";

import todoVar from "../stores/todo";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "../queries.todo";

const TodoList: FC = () => {
  const {
    data: { getTodo },
    loading,
  } = useQuery(GET_TODOS);
  console.log(getTodo);
  // const todos = useReactiveVar(todoVar);
  return (
    <section>
      {loading ? (
        <div>로딩중 ...</div>
      ) : (
        getTodo?.map((todo: any) => (
          <TodoItem todo={todo} key={`todo_${todo.id}`} />
        ))
      )}
    </section>
  );
};

export default TodoList;
