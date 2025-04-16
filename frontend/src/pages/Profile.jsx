import React from "react";
import { useState, useEffect } from "react";
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
    <div>
      <h1>Your Profile</h1>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Join Date: {user.joinDate}</h2>
      <h1>All the posts from you:</h1>
      {posts.map((post) => {
        return <BlogCard post={post} />;
      })}
    </div>
  );
}

export default Profile;
