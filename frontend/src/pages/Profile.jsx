import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../api"; 
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
      filteredPosts.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      setPosts(filteredPosts);
      setUser(decodedUser);
    }
    loadUserData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toString().slice(4, 15); 
  }

  async function handleDelete(postId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) {
      return; 
    }

    try {
      await deletePost(postId); 
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId)); 
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  }

  return (
    <main>
      <section className="profile-section">
        <header>
          <h1>Your Profile</h1>
        </header>
        <article className="profile-article">
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Join Date:</strong> {formatDate(user.joinDate)}</p>
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
                <button
                  className="delete-button"
                  onClick={() => handleDelete(post._id)}
                  aria-label={`Delete post titled ${post.title}`}
                >
                  Delete
                </button>
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
