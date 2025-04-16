import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to our blog website! Here you'll find a collection of articles,
        stories, and insights on various topics.
      </p>
      <p>
        Our platform provides a space for users to share their thoughts,
        experiences, and expertise through blog posts.
      </p>
      <p>
        If you're interested in contributing, feel free to create a new blog by
        visiting our <Link to="/createblog">Create Blog</Link> page.
      </p>
      <p>Explore our content and join our community of writers and readers!</p>
    </div>
  );
}

export default About;
