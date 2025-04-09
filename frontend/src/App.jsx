import { useState, useEffect } from "react";
import {getPosts, getPost,createPost,updatePost,deletePost} from "./api";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();

/*   function createPost(){
    let postObject = {
      title:"MERN",
      description:"I am learning",
      content:"very well",
      author:"Bobby",
      dateCreated: new Date()
    }
    axios.post("http://localhost:4000/posts",postObject)
  } */

    function makePost()
    {
      let postObject = {
      title:"haha",
      description:"what was the question?",
      content:"very well",
      author:"tom and jerry",
      dateCreated: new Date()
    }
    createPost(postObject)
  }


  /* useEffect(() => {
  async function loadAllPosts() {
    let data = await getPosts();
    if(data){
      setPosts(data)
    }
  }
  loadAllPosts()
  }, []); */


  return (<>
<button onClick={makePost}>Create Post</button>
  </>);
}

export default App;
