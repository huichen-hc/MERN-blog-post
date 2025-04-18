import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <header>
        <h1>About Us</h1>
      </header>
      <article>
        <p>
          Welcome to our blog website! Here, you'll find a treasure trove of articles, stories, and random ramblings that may or may not change your life.
        </p>
        <p>
          Our platform is like a digital campfire where users gather to share their thoughts, experiences, and questionable expertise through blog posts. Bring marshmallows.
        </p>
        <p>
          Feeling inspired? You can unleash your inner Shakespeare (or your inner meme lord) by creating a new blog post on our <Link to="/createblog">Create Blog</Link> page. No judgment here.
        </p>
        <p>
          So grab a cup of coffee, dive into our content, and write some nonsense. We promise, it's more fun than doing your laundry.
        </p>
      </article>
    </section>
  );
}

export default About;
