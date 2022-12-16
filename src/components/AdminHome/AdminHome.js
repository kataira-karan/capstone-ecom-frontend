import { React, useState, useEffect } from "react";
import Navigation from "../navigation/Navigation";
import "./AdminHomeStyle.css";
import { Switch, Route } from "react-router-dom";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import Products from "./Products/Products";
import Category from "./Category/Category";
import Users from "./Users/Users";

import {
  IoIosArrowDropleft,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";

const AdminHome = () => {
  const [isSidebarSmall, setisSidebarSmall] = useState(false);
  const [currentPage, setcurrentPage] = useState("admin");
  const hideAdminSidebar = () => {
    setisSidebarSmall(!isSidebarSmall);
  };

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="admin-home-container">
        <AdminSidebar
          isSidebarSmall={isSidebarSmall}
          setisSidebarSmall={isSidebarSmall}
          hideAdminSidebar={hideAdminSidebar}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        ></AdminSidebar>

        <div className="admin-content"></div>
      </div>
    </>
  );
};

export default AdminHome;
