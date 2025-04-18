import React from "react";
import { Link } from "react-router-dom";
import { pageData } from "./pageData";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate(); 

  function handleLogout(){
    sessionStorage.removeItem("User");
    navigate("/");
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pageData.map((page) => (
          <li key={page.path} className="navbar-item">
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <button className="logout-button" onClick={handleLogout}>Log out</button>
    </nav>
  );
}
