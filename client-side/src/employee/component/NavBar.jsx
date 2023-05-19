import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { logOut } from "../slice/authSlice/authslice.js";
import { IoMdNotifications } from "react-icons/io";
import "../style/navbar.css";
import { Form, Card, Modal } from "react-bootstrap";
import Joi from "joi";
import { useState } from "react";
import Updateaccount from "./Updateaccount.jsx";
import { GiCancel } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

import { useGetUserQuery } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";
import { logOut } from "../../features/authSlice/authslice.js";
import { clearRedux } from "../../features/dataSlice/dataslice.js";
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    dispatch(clearRedux());
    localStorage.clear();
    return navigate("/login");
  };
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [err, setErr] = useState({ id: "T" });
  const [inputs, setInputs] = useState({
    fullName: "",
    address: "",
    password: "",
    phoneNumber: "",
  });
  const { data, refetch } = useGetUserQuery({ id });

  const registerSchema = Joi.object({
    id: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  });
  const validateInput = (input, inputSchema) => {
    return inputSchema.validate(input);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const validation = validateInput(value, registerSchema.extract(name));
    if (validation.error) {
      setErr({ [name]: validation.error.details[0].message });
    } else {
      const er = { ...err };
      delete er[name];
      setErr({ ...er });
    }
    // console.log(err);
    setId(value);
  };
  async function getCitizenData() {
    await refetch();

    if (!data) {
      Swal.fire({
        icon: "error",
        text: "ايميل خاطئ لا يوجد مواطن",
      });
    } else {
      setInputs(data);
    }
    // console.log(data)
  }

  return (
    <>
      <div>
        <nav
          className={`navbar navColor navbar-expand-lg bg-body-tertiary pb-0 pt-0  `}
        >
          <div className={`container-fluid  `}>
            <img
              className="myImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfSR7Dvzd3AQpG03yUCvRO6QhU_SQcN2SvWezOQ5FuKTYOkwHYnm_ZK7GsrqPv09HB38&usqp=CAU"
              alt=""
            />
            <h1 className="navbar-brand text-white" href="/#">
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
                  <Link
                    className="nav-link text-white active ms-5"
                    aria-current="page"
                    to="/homeEmployee"
                  >
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link text-white dropdown-toggle"
                    href="//#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    الحسابات
                  </a>
                  <ul className="dropdown-menu maxWidth">
                    <li>
                      <Link
                        className="dropdown-item text-end dropColor"
                        to="/employee/createaccount"
                      >
                        انشاء حساب
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <span
                        className="dropdown-item text-end dropColor"
                        onClick={handleShow}
                        style={{ cursor: "pointer" }}
                      >
                        تعديل حساب
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link text-white dropdown-toggle"
                    href="//#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    الملكيات
                  </a>
                  <ul className="dropdown-menu maxWidth">
                    <li>
                      <Link
                        className="dropdown-item text-end dropColor"
                        to="/addland"
                      >
                        اضافة أرض
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-end dropColor"
                        to="/freezland"
                      >
                        تجميد أرض
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item smallSize">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <IoMdNotifications
                      style={{
                        cursor: "pointer",
                        color: "White",
                        fontSize: "20px",
                      }}
                    />
                  </Link>
                </li> */}
                <li className="nav-item  maxWidthO">
                  <span
                    className="nav-link active text-white maxWidth"
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

      <Modal show={show} onHide={handleClose}>
        {/* {errors && <Alert variant="danger">{errors}</Alert>} */}
        <div className="d-flex justify-content-between align-item-center">
          <div className="d-flex">
            <Form>
              <Form.Group className="me-2">
                <Form.Label htmlFor="Id">رقم الهوية</Form.Label>
                <Form.Control
                  type="number"
                  id="Id"
                  name="id"
                  onChange={onChange}
                  className={err["id"] ? "text-danger" : "text-success"}
                />
              </Form.Group>
            </Form>

            <AiOutlineSearch
              className={
                err["id"]
                  ? "disabled-icona me-2  bg-success text-light rounded p-1 "
                  : "me-2  bg-success text-light rounded p-1"
              }
              style={{
                fontSize: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
              }}
              onClick={getCitizenData}
            />
          </div>

          <GiCancel
            style={{ fontSize: "2rem", marginTop: "2rem", cursor: "pointer" }}
            className="ms-3  bg-danger text-light rounded p-1"
            onClick={handleClose}
          />
        </div>
        <hr />
        <Updateaccount
          Card={Card}
          Form={Form}
          inputs={inputs}
          setInputs={setInputs}
        />

        {/* <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
           إلغاء
          </Button>
          <Button variant="success" onClick={handleClose}>
            حفظ
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default NavBar;
