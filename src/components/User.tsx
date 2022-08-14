import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h4>Name: {user.name}</h4>
      <h5>Username: {user.username}</h5>
      <h5>Email: {user.email}</h5>
      <h6>
        Address: {user.address.street} {user.address.suite} {user.address.city}
        {user.address.zipcode}
      </h6>
      {user.phone && <h6>Phone {user.phone}</h6>}
      {user.website && <h6>Website {user.website}</h6>}
      {user.company && (
        <h6>
          Company {user.company.name} {user.company.bs}{" "}
          {user.company.catchPhrase}
        </h6>
      )}
    </div>
  );
};

export default User;
