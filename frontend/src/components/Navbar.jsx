import React from "react";
import { Link } from "react-router-dom";
import { pageData } from "./pageData";

export default function Navbar() {
  return (
    <div className="navbar">
      {pageData.map((page) => {
        return (
          <Link to={page.path} className="navbar-item">
            <button>{page.name}</button>
          </Link>
        );
      })}
    </div>
  );
}
 