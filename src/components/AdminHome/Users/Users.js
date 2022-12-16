import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
const Users = () => {
  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="admin-home-container">
        <AdminSidebar></AdminSidebar>

        <div className="admin-content">Users</div>
      </div>
    </>
  );
};

export default Users;
