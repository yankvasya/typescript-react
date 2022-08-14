import React, { FC } from "react";
import User from "./User";
import { IUser } from "../types/types";

interface UsersProps {
  users: IUser[];
}

const UserList: FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
