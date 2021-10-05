import { makeVar } from "@apollo/client";

export interface TodoProps {
  id: number;
  content: string;
}

const todoIdCounterVar = makeVar(0);
const todoVar = makeVar<TodoProps[]>([]);

export const addTodo = (content: string) => {
  const prevId = todoIdCounterVar();
  const currentTodo = todoVar();
  const newTodo = { id: prevId + 1, content };
  todoVar([...currentTodo, newTodo]);
  todoIdCounterVar(prevId + 1);
};

export default todoVar;
