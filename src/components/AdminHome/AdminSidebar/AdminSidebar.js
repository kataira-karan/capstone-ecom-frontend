import { React, useState } from "react";
import "../AdminHomeStyle.css";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleft,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";

const AdminSidebar = ({}) => {
  const [isSidebarSmall, setisSidebarSmall] = useState(false);
  const [currentPage, setcurrentPage] = useState("admin");
  const hideAdminSidebar = () => {
    setisSidebarSmall(!isSidebarSmall);
  };
  return (
    <div className={isSidebarSmall ? "small-admin-sidebar" : "admin-sidebar"}>
      <div className="hide-sidebar-icon-container" onClick={hideAdminSidebar}>
        {isSidebarSmall ? (
          <IoIosArrowForward className="hide-sidebar-icon"></IoIosArrowForward>
        ) : (
          <IoIosArrowBack className="hide-sidebar-icon"></IoIosArrowBack>
        )}
      </div>

      <div className="admin-sidebar-profile">
        <img
          className={
            isSidebarSmall
              ? "admin-profile-picture-small"
              : "admin-profile-picture"
          }
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLkybiP3I5YBAAE11TvQBCRNXt-00rlnEi9k8G5kQJDJ1zdG49ZZqdVFeRR3MqOlyXfM&usqp=CAU"
        />{" "}
        <span className={isSidebarSmall ? "admin-name-small" : "admin-name"}>
          John Doe
        </span>
      </div>

      <div className="admin-sidebar-links">
        <Link to="/admin/products">
          <div className="admin-sidebar-link">
            <span
              className={
                isSidebarSmall
                  ? "admin-sidebar-link-name-small"
                  : " admin-sidebar-link-name"
              }
            >
              {" "}
              Products{" "}
            </span>
            <span className="admin-sidebar-link-icon">
              {" "}
              <MdOutlineCategory></MdOutlineCategory>{" "}
            </span>
          </div>
        </Link>

        <hr className="admin-sidebar-link-divider" />

        <Link to="/admin/category">
          <div className="admin-sidebar-link">
            <span
              className={
                isSidebarSmall
                  ? "admin-sidebar-link-name-small"
                  : " admin-sidebar-link-name"
              }
            >
              {" "}
              Category{" "}
            </span>
            <span className="admin-sidebar-link-icon">
              {" "}
              <RiProductHuntLine></RiProductHuntLine>{" "}
            </span>
          </div>
        </Link>

        <hr className="admin-sidebar-link-divider" />

        <Link to="/admin/users">
          <div className="admin-sidebar-link">
            <span
              className={
                isSidebarSmall
                  ? "admin-sidebar-link-name-small"
                  : " admin-sidebar-link-name"
              }
            >
              {" "}
              Users{" "}
            </span>
            <span className="admin-sidebar-link-icon">
              {" "}
              <HiOutlineUsers></HiOutlineUsers>{" "}
            </span>
          </div>
        </Link>

        <hr className="admin-sidebar-link-divider" />
      </div>
    </div>
  );
};

export default AdminSidebar;
