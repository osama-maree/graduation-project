import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../../login/login.scss";

import joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import { useSelector } from "react-redux";
import { useChangePasswordMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";
export const UpdatedPassword = () => {
  const joiPassword = joi.extend(joiPasswordExtendCore);
  const { role, email } = useSelector((state) => state.forgot);
  const [pass, setPass] = useState({});
  const [error, setError] = useState();
  const [changePassword, {  isLoading, isError, isSuccess }] =
    useChangePasswordMutation();
  const schema = (input) =>
    joi
      .object({
        password: joiPassword
          .string()
          .minOfSpecialCharacters(2)
          .minOfLowercase(2)
          .minOfUppercase(2)
          .minOfNumeric(2)
          .noWhiteSpaces()
          .required(),
        cpassword: joiPassword
          .string()
          .minOfSpecialCharacters(2)
          .minOfLowercase(2)
          .minOfUppercase(2)
          .minOfNumeric(2)
          .noWhiteSpaces()
          .required(),
      })
      .validate(input);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
    setError(schema(pass)?.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changePassword({ email, role, password: pass.password });
  };
  useEffect(() => {
    if (isError) {
      Swal.fire({
        text: "فشلت العملية أدخل كود صالح واعد المحاولة",
        icon: "error",
      });
    }
  }, [isError]);
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        text: "تمت العملية بنجاح",
        icon: "success",
      });
    }
  }, [isSuccess]);
  return (
    <div className="container-fluid mystyle-auth">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">نسيت كلمة المرور</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="password">
                ادخل كلمة المرور الجديدة
              </Form.Label>
              <Form.Control
                type="password"
                onChange={onChange}
                name="password"
                id="code"
                placeholder="أدخل كلمة مرور قوية  رمزين على الأقل وحرفين ورقمين"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="cpassword">كلمة المرور المطابقة</Form.Label>
              <Form.Control
                type="password"
                onChange={onChange}
                name="cpassword"
                id="cpassword"
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-between">
              <Button
                variant="danger"
                type="submit"
                className="w-45 mt-3"
                disabled={error || isLoading ||isSuccess}
              >
                تعديل
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <Button
              variant="success"
              disabled={isError || isError || !isSuccess}
            >
              <Link to="/login" className="text-light">
                تسجيل الدخول
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
