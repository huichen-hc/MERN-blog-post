import React from "react";
import { createUser } from "../api";
import { useState } from "react";

export default function CreateUser() {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name="name"
        maxLength={20}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        maxLength={40}
        required
      />
      <input
        type="text"
        placeholder="Password"
        onChange={handleChange}
        name="password"
        maxLength={20}
        required
      />
      <button type="submit">Create Account </button>
    </form>
  );
}
