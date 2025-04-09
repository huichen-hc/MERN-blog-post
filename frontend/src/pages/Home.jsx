import React from 'react'
import { getPosts } from '../api'
import { useState, useEffect } from 'react'

function Home() {

  const [posts, setPosts] = useState([]);


  useEffect(
    ()=>{
      async function loadAllPosts(){
        const data = await getPosts();
        setPosts(data);
      }
      loadAllPosts();
    },[]
  )

  return (
    <div>
    <h1>Home page</h1> 
    <p>Here you can see all the posts</p>
    {posts.map((post) =>{
      return(
        <>
        <h1>{post.title}
        </h1>
        <h2>{post.description}</h2>
        <p>{post.dateCreated}</p>
        </>
      )
    })}
    </div>
  )
}

export default Home
