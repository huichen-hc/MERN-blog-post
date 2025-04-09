import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();

  function createPost(){
    let postObject = {
      title:"MERN",
      description:"I am learning",
      content:"very well",
      author:"Bobby",
      dateCreated: new Date()
    }
    axios.post("http://localhost:4000/posts",postObject)
  }


/*   useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:4000/posts/");
      console.log(response);
      if (response.status === 200){
        setData(response.data)
      }
    }
    grabData()
  }, []); */

  return (<>
  <button onClick={createPost}>Create Object</button>

{JSON.stringify(data)}
  </>);
}

export default App;
