import Joi from "joi";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import {
  getDataFail,
  getDataPending,
  getDataSuccess,
} from "../features/dataSlice/dataslice.js";
import { loginSuccess } from "../features/authSlice/authslice.js";

function Login() {
  //   const navigate = useNavigate();
  const { role, isSuccess, isError, isLoading } = useSelector(
    (state) => state.data
  );

  const location = useLocation();

  const [errors, setErrors] = useState();
  const dispatch = useDispatch();
  const [userData, setUser] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setUser({ ...userData, [name]: value });
  };
  const validateUser = () => {
    const schema = Joi.object({
      password: Joi.string().min(5).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
    });
    return schema.validate(userData, { abortEarly: false });
  };
  const handelClick = async (e) => {
    e.preventDefault();
    const val = validateUser();
    if (val.error) {
      setErrors("الرجاء ادخال بريد بيانات صحيحة");
    } else {
      dispatch(getDataPending());
      try {
        const res = await axios.post(
          "http://localhost:3000/api/v1/tabo/auth/signin",
          userData
        );
        if (res.status === 200) {
          dispatch(getDataSuccess(res.data));
          return dispatch(loginSuccess(res.data));
        } else {
          setErrors(null)
          return dispatch(getDataFail());
        }
      } catch (err) {
        setErrors(null)
        return dispatch(getDataFail());
      }
    }
  };
  //console.log(errors)
  // localStorage.clear()
  return (
    <>
      {isSuccess === true ? (
        <Navigate
          to={
            role === "user"
              ? "/"
              : role === "employee"
              ? "/homeEmployee"
              : "/Admin"
          }
          state={{ from: location }}
          replace
        />
      ) : (
        // {navigate(-1)}
        <div className="container-fluid mystyle-auth">
          <Card>
            <Card.Body>
              <form>
                {isError && (
                  <div className="alert alert-danger" role="alert">
                    الرجاءالمحاولة مرة أخرى
                  </div>
                )}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    id="form2Example1"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    id="form2Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form2Example2">
                    كلمة المرور
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example31"
                      >
                        {" "}
                        تذكر{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <Link to="/forgotPassword">هل نسيت كلمة السر</Link>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block mb-4"
                  onClick={handelClick}
                  disabled={isLoading || errors}
                >
                  تسجيل الدخول
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
      )}{" "}
    </>
  );
}

export default Login;
