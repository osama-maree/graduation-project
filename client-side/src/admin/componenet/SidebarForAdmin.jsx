import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown.jsx";
import { useSelector } from "react-redux";

function SidebarForAdmin() {
  const { role } = useSelector((state) => state.data);
  return (
    <>
      <div className="w-75 m-auto text-end">
        <div
          className="d-flex flex-column flex-shrink-0 text-dark"
          // style={{ width: "100%" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0  text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4 text-dark h5 mt-5 mb-4">الصفحة الرئيسية</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item mt-1">
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
              <Link to={"/" + role + "/sharia"} className="nav-link mb-2">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                المحكمة الشرعية
              </Link>
            </li>

            <li>
              <Link to={"/" + role + "/area"} className="nav-link mb-4">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#people-circle" />
                </svg>
                دائرة المساحة
              </Link>
            </li>
          </ul>
          <hr />
          <ul className="nav nav-pills mt-2 flex-column mb-auto">
            <li className="nav-item">
              <h2 href="e" className="nav-link active" aria-current="page">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#home" />
                </svg>
                الموظفين
              </h2>
            </li>

            <li>
              <Link className="nav-link mb-2 mt-2" to="/view">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                عرض الموظفين
              </Link>
            </li>
            <li>
              <Link className="nav-link mb-4" to="/vacation">
                <svg className="bi me-2" width={16} height={16}>
                  <use xlinkHref="#table" />
                </svg>
                تعيين اجازة
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarForAdmin;
