import React from 'react'
import { getPosts } from '../api'
import { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard';

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
    {posts.map((post) =>{
      return(
<BlogCard post={post}/>
      )
    })}
    </div>
  )
}

export default Home
