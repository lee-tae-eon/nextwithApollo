import React, { FC, useState } from "react";
import { addTodo } from "../stores/todo";

const TodoForm: FC = () => {
  const [content, setContent] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChangeContent}
        value={content}
        placeholder="content"
      />
      <button type="submit">todo</button>
    </form>
  );
};

export default TodoForm;
