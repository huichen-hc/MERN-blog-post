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
    <div className="navbar">
      {pageData.map((page) => {
        return (
          <Link to={page.path} className="navbar-item">
            <button>{page.name}</button>
          </Link>
        );
      })}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
  