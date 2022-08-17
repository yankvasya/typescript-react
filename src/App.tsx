import React, { useEffect, useState } from "react";
import Card, { cardBorder } from "./components/Card";
// import UserList from "./components/UserList";
import List from "./components/List";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import User from "./components/User";
import Todo from "./components/Todo";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = (
        await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      ).data;

      setUsers(response);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = (
        await axios.get<ITodo[]>(
          "https://jsonplaceholder.typicode.com/todos?_limit=8"
        )
      ).data;

      setTodos(response);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return (
    <div>
      <Card
        onClick={(num) => console.log(num)}
        width="60px"
        height="60px"
        border={cardBorder.light}
      >
        <button>1231</button>
      </Card>
      {/*<UserList users={users} />*/}
      <List
        items={todos}
        renderItems={(todo: ITodo) => <Todo key={todo.id} todo={todo}></Todo>}
      />
      <List
        items={users}
        renderItems={(user: IUser) => <User key={user.id} user={user}></User>}
      />
    </div>
  );
};

export default App;
