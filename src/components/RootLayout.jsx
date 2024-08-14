// import React from 'react'

import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AppContext";
import LogIn from "../pages/LogIn";

function RootLayout() {

const {user:{user}} = useContext(AuthContext)

  return (
    <>
      <div className="relative w-full md:flex">
        <SideMenu />
        <div className="flex items-center justify-center w-full">
          
          {user?<Outlet />: <LogIn/>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
