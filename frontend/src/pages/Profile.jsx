import React, { useState, useEffect } from "react";
import { getPosts } from "../api";
import * as jwt_decode from "jwt-decode";
import BlogCard from "../components/BlogCard";

function Profile() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUserData() {
      const encodedUser = sessionStorage.getItem("User");
      if (!encodedUser) {
        return;
      }
      const decodedUser = jwt_decode.jwtDecode(encodedUser);
      const allPosts = await getPosts();
      const filteredPosts = allPosts.filter(
        (post) => post.author === decodedUser._id
      );
      setPosts(filteredPosts);
      setUser(decodedUser);
    }
    loadUserData();
  }, []);

  return (
    <main>
      <section>
        <header>
          <h1>Your Profile</h1>
        </header>
        <article>
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Join Date:</strong> {user.joinDate}</p>
        </article>
      </section>
      <section>
        <header>
          <h2>Your Blog Posts</h2>
        </header>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't written any blog posts yet.</p>
        )}
      </section>
    </main>
  );
}

export default Profile;
