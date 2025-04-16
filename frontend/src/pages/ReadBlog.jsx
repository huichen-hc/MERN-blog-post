import React, { useState } from "react";
import { getPost } from "../api";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ReadBlog() {
  const [post, setPost] = useState({});
  let params = useParams();
  const navigate = useNavigate();
  let postId = params.id;

  useEffect(() => {
    async function loadPost() {
      
      let data = await getPost(postId);
      let date = new Date(data.dateCreated);
      data.dateCreated = date.toString();
      setPost(data)
      window.gtag("event","read",{"title":data.title})
    }
    loadPost();
  }, []);

  return (
    <article>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <h3>{post.dateCreated?.slice(4, 15)}</h3>
      <p>{post.content}</p>
    </article>
  );
}

export default ReadBlog;
