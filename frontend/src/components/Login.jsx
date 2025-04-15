import React from "react";
import { verifyUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
   
      const response = await verifyUser(user);
      if (response){
        navigate("/home");
      }else{
        alert("Login failed!")
      }
     
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