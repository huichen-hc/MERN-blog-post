import React, { use } from "react";
import { useState } from "react";
import { createPost } from "../api";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit() {
    let submitObject = {
      title: title,
      description: description,
      content: content,
      author: null,
      dateCreated: new Date(),
    };
    await createPost(submitObject);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Blog Post Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        maxLength={100}
        required
        name="title"
      />
      <label>Blog Post Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        maxLength={200}
        required
        name="description"
      />
      <label>Blog Post Content</label>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        maxLength={5000}
        required
        name="content"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateBlog;
