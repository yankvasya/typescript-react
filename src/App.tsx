import React, { useEffect, useState } from "react";
import Card, { cardBorder } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
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
      <UserList users={users} />
    </div>
  );
};

export default App;
