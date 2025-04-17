import React from "react";
import { createUser } from "../api";
import { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await createUser(user);
      if (response.status === 201) {
        alert("User created successfully!");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        alert("The email is already taken.");
      } else {
        alert("User account could not be created.");
      }
    }
  }

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        onChange={handleChange}
        name="name"
        maxLength={20}
        required
      />
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
      <button type="submit">Create Account</button>
    </form>
  );
}

export default CreateUser;