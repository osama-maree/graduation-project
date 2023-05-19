import React from "react";
import { Link } from "react-router-dom";
// import transactions from "./Data.js";

import "./../style/side.css";
import DropdownLeftMenu from "./DropdownLeftMenu.jsx";
import DropDown from "../../admin/componenet/DropDown.jsx";
import { useSelector } from "react-redux";
import transactions from "../../services/Data.js";
const SideNav = () => {
  const { role } = useSelector((state) => state.data);
  return (
    <div className="w-75 m-auto text-end">
      <div
        className="d-flex flex-column flex-shrink-0 text-dark"
        // style={{ width: "100%" }}
      >
        <Link
          to="/homeEmployee"
          className="d-flex align-items-center mb-3 mb-md-0  text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4 text-secondary h5 mt-4">الصفحة الرئيسية</span>
        </Link>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto mt-2">
          <li className="nav-item mb-2">
            <span className="nav-link active text-white" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              المعاملات
            </span>
          </li>

          <li className="sideColor mt-1">
            {transactions.map((transaction, indx) => (
              <DropdownLeftMenu transaction={transaction} key={indx} />
            ))}
          </li>
        </ul>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <span className="nav-link active" aria-current="page">
              <svg className="bi me-2" width={16} height={16}></svg>
              الاستعلام من
            </span>
          </li>
          <li>
            <Link to={"/" + role + "/internal"} className="nav-link my-2 ">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              وزارة الداخلية
            </Link>
          </li>
          <li>
            <Link to={`/${role}/outer`} className="nav-link mb-2">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              وزارة الخارجية
            </Link>
          </li>
          <li>
            <Link to={`/${role}/tax`} className="nav-link mb-2">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              وزارة المالية
            </Link>
          </li>
          <li className="me-4">
            <DropDown
              data="البلديات"
              data1="استعلام عن أرض"
              data2="استعلام عن براءة ذمة"
              path1="/land/municipality"
              path2="/second/muni"
            />
          </li>
          <li>
            <Link to={"/" + role + "/area"} className="nav-link mb-2">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              دائرة المساحة
            </Link>
          </li>
          <li>
            <Link to={"/" + role + "/sharia"} className="nav-link mb-4">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              المحكمة الشرعية
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
