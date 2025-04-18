import React from "react";
import { verifyUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    try {
      const token = await verifyUser(user);
      window.gtag("event", "login_success");
      sessionStorage.setItem("User", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/home");
    } catch (error) {
      window.gtag("event", "login_failed");
      alert(error.message);
    } finally {
      window.gtag("event", "login_click");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        onChange={handleChange}
        name="email"
        maxLength={40}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        onChange={handleChange}
        name="password"
        maxLength={20}
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
