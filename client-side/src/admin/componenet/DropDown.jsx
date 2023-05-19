import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropDown = ({ data, data1, data2, path1, path2 }) => {
  return (
    <div>
      {" "}
      <NavDropdown title={data} align="start" drop="start">

        <Link to={path1} className="dropdown-item text-end">
          {data1}
        </Link>
        <NavDropdown.Divider />
        <Link to={path2} className="dropdown-item text-end">
          {data2}
        </Link>
      </NavDropdown>
    </div>
  );
};

export default DropDown;
