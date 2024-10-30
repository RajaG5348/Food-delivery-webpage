import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({size , warning}) {
  return (
    <div>
      <Navbar size ={size} warning ={warning}/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
