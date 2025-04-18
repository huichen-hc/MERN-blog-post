import React, { useState, useEffect } from "react";
import { getPosts } from "../api";
import BlogCard from "../components/BlogCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadAllPosts() {
      const data = await getPosts();
      data.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      setPosts(data);
    }
    loadAllPosts();
  }, []);

  return (
    <main>
      <section className="posts">
        <h1>Recent Blog Posts</h1>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available. Check back later!</p>
        )}
      </section>
    </main>
  );
}

export default Home;
