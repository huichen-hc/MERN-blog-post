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

  // Generate JSON-LD for better SEO of each individual post
  const generateJsonLd = () => {
    if (!post.title) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.dateCreated,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
      publisher: {
        "@type": "Organization",
        name: "Simple Blog Website",
      },
    };
  };

  return (
    <main>
      <article className="read-blog-article">
        <header>
          <button onClick={() => navigate(-1)} aria-label="Go back to the previous page">
            Back
          </button>
          <h1>{post.title}</h1>
          <h2>{post.description}</h2>
          <p>{post.dateCreated?.slice(4, 15)}</p>
        </header>
        <section>
          {post.content?.split("\n").map((paragraph, index) => (
            <p key={index} className="read-blog-content">
              {paragraph}
            </p>
          ))}
        </section>
      </article>

      {post.title && (
        <script type="application/ld+json">
          {JSON.stringify(generateJsonLd())}
        </script>
      )}
    </main>
  );
}

export default ReadBlog;
