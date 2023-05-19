import { Link, useNavigate } from "react-router-dom";
// import styles from "./../../citizen/style/Nav.module.css";
// import { logOut } from "../../slice/authSlice/authslice.js";
import { useDispatch } from "react-redux";
// import "./../../employee/employeeNavbar/navbar.css";
import "./../../employee/style/navbar.css";
import { logOut } from "../../features/authSlice/authslice.js";
import { clearRedux } from "../../features/dataSlice/dataslice.js";
// import DropDown from "./DropDown.jsx";
// import { Dropdown, DropdownButton } from "react-bootstrap";
function NavForAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logOut());
    dispatch(clearRedux());
    localStorage.clear();

    return navigate("/login");
  };
  return (
    <>
      <div>
        <nav
          className={`navbar navColor navbar-expand-lg bg-body-tertiary pb-0 pt-0`}
        >
          <div className={`container-fluid`}>
            <img
              className="myImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfSR7Dvzd3AQpG03yUCvRO6QhU_SQcN2SvWezOQ5FuKTYOkwHYnm_ZK7GsrqPv09HB38&usqp=CAU"
              alt=""
            />
            <h1 className="navbar-brand text-white">
              السلطة الفلسطينية دائرة الطابو
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item">
                  <Link
                    className="nav-link active ms-4 text-white"
                    aria-current="page"
                    to="/admin"
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-white dropdown-toggle"
                    href="//#"
                    // role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    اضافة
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-end">
                      <Link className="dropdown-item" to="/addnews">
                        اضافة خبر
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/addModal">
                        اضافة حالة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active ms-4 text-white"
                    aria-current="page"
                    to="/checklinks"
                  >
                    فحص الروابط
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active ms-4 text-white"
                    aria-current="page"
                    to="/newAccount"
                  >
                    انشاء حساب
                  </Link>
                </li>

                <li className="nav-item maxWidthO">
                  <span
                    className="nav-link active  text-white maxWidth"
                    style={{ cursor: "pointer" }}
                    aria-current="page"
                    onClick={logout}
                  >
                    تسجيل الخروج{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavForAdmin;
