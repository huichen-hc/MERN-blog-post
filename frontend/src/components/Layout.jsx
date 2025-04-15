import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const user = sessionStorage.getItem("User");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
