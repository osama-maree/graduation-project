import styles from "../style/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logOut } from "../../features/authSlice/authslice.js";
import { clearRedux } from "../../features/dataSlice/dataslice.js";

function NavForCitiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {role}=useSelector((state)=>state.data)
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
          className={`navbar navbar-expand-lg bg-body-tertiary pb-0 pt-0 ${styles.Nav_divs__x2kCr}`}
        >
          <div className={`container-fluid  ${styles.divs}`}>
            <img
              className={styles.edit}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfSR7Dvzd3AQpG03yUCvRO6QhU_SQcN2SvWezOQ5FuKTYOkwHYnm_ZK7GsrqPv09HB38&usqp=CAU"
              alt=""
            />
            <h1 className="navbar-brand" href="/#">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    الحركات
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-end">
                      <Link className="dropdown-item" to="/sale">
                       
                        بيع
                      </Link>
                    </li>
                    <li className="text-end">
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/sorting">
                        {" "}
                        فرز
                      </Link>
                    </li>
                    <li className="text-end">
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/fregmantation">
                        {" "}
                        تجزئة
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/mortgage">
                        {" "}
                        رهن
                      </Link>
                    </li>
                    <li className="text-end">
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/inheretance">
                        نقل ارث
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="//#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    الاستعلام عن
                  </a>
                  <ul className="dropdown-menu">
                    <li className="text-end">
                      <Link className="dropdown-item" to="/land">
                        الاراضي
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="text-end">
                      <Link className="dropdown-item" to="/transaction">
                        {" "}
                        سير المعاملة{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                    aria-current="page"
                    // href="//#"
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
export default NavForCitiz;
