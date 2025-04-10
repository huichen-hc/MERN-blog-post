import React from "react";

function BlogCard({post}) {
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p>{post.dateCreated}</p>
    </>
  );
}

export default BlogCard;
