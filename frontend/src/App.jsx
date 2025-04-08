import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/posts/67f3e9a6b1ac2168c85fa445");
      console.log(response);
      if (response.status === 200){
        setData(response.data)
      }
    }
    grabData()
  }, []);

  return (<>
  
{JSON.stringify(data)}
  </>);
}

export default App;
