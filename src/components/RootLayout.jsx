// import React from 'react'

import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <div className="relative w-full md:flex">
        <SideMenu />
        <div className="flex items-center justify-center w-full">
          
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
