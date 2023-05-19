import React from "react";
import Declar from "./Declar";
import SidebarForAdmin from "./SidebarForAdmin";

function AdminHome() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 px-0 style">
          <SidebarForAdmin />
        </div>

        <div className="col-md-8 addimg">
          <Declar />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
