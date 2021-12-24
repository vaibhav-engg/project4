import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h1>Successfully Logged In</h1>
      <h3>Email Id : {user.EmailId}</h3>
      <h3>Codename : {user.CodeName}</h3>
    </div>
  );
};

export default User;