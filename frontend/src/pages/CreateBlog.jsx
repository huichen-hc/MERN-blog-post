import React, { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

   async function handleSubmit(e) {
    e.preventDefault();
    let submitObject = {
      title: title,
      description: description,
      content: content,
      author: null,
      dateCreated: new Date(),
    };
    await createPost(submitObject);
    window.gtag("event", "create_post");
    alert("Your post has been created successfully!"); 
    navigate("/home"); 
  }

  return (
    <section>
      <header>
        <h1>Create a New Post</h1>
      </header>
      <form className="create-blog-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Post Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter the title of your blog post"
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          required
          name="title"
        />
        <label htmlFor="description">Blog Post Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter a short description of your blog post"
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          required
          name="description"
        />
        <label htmlFor="content">Blog Post Content</label>
        <textarea
          id="content"
          placeholder="Write your blog post content here..."
          onChange={(e) => setContent(e.target.value)}
          maxLength={5000}
          required
          name="content"
          rows="15"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CreateBlog;
