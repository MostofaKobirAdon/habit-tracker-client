import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="  min-h-screen flex flex-col ">
      <Nav></Nav>
      <div className="grow">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
