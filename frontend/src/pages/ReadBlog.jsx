import React, { useState, useEffect } from "react";
import { getPost } from "../api";
import { useParams, useNavigate } from "react-router-dom";

function ReadBlog() {
  const [post, setPost] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const postId = params.id;

  useEffect(() => {
    async function loadPost() {
      const data = await getPost(postId);
      const date = new Date(data.dateCreated);
      data.dateCreated = date.toString();
      setPost(data);
      window.gtag("event", "read", { title: data.title });
    }
    loadPost();
  }, [postId]);

  return (
    <main>
      <article>
        <header>
          <button onClick={() => navigate(-1)} aria-label="Go back">Back</button>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <p>{post.dateCreated?.slice(4, 15)}</p>
        </header>
        <section>
          <p>{post.content}</p>
        </section>
      </article>
    </main>
  );
}

export default ReadBlog;
