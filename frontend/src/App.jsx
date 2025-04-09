import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import ReadBlog from "../pages/ReadBlog";
import Profile from "../pages/Profile";
import CreateBlog from "../pages/CreateBlog";

function App() {

  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/createblog" element={<CreateBlog/>}/>
      <Route path="/readblog" element={<ReadBlog/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
  </Router>
  </>;
}

export default App;
