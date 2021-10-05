import { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GlobalStyle from "./styles/GlobalStyles";

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <TodoForm />
      <TodoList />
    </ApolloProvider>
  );
};

export default App;
