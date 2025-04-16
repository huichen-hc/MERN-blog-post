import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ReadBlog from "./pages/ReadBlog";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/createblog" element={<CreateBlog />} />
            <Route path="/readblog/:id" element={<ReadBlog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
