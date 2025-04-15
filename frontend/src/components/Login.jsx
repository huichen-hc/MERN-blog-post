import React from "react";
import { verifyUser } from "../api";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
   
      const response = await verifyUser(user);
      console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        maxLength={40}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        maxLength={20}
        required
      />
      <button type="submit">Log in </button>
    </form>
  );
}


export default Login;