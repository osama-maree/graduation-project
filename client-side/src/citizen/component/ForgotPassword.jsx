import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../../login/login.scss";
import { useSendCodeMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setEmailRedux } from "../../features/forgotSlice/forgotslice.js";
export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [sendCode, { data, isLoading, isError, isSuccess }] =
    useSendCodeMutation();

  const [email, setEmail] = React.useState("");
  const handleSend = async (e) => {
    e.preventDefault();
    await sendCode({ email });
  };
  useEffect(() => {
    if (isError) {
      Swal.fire({
        text: "أدخل ايميل صالح وأعد المحاولة",
        icon: "error",
        showCancelButton: true,
      });
    }
  }, [isError]);
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        text: "تمت العملية بنجاح",
        icon: "success",
        showCancelButton: true,
      });
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setEmailRedux({ email, role: data.role }));
    }
  }, [isSuccess]);
  return (
    <div className="container-fluid mystyle-auth">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">نسيت كلمة المرور</h2>
          <Form onSubmit={handleSend}>
            <Form.Group>
              <Form.Label htmlFor="email">أدخل البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              className="w-45 mt-3"
              disabled={isLoading || isSuccess}
            >
              ارسال الرمز
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Button
              variant="success"
              disabled={isLoading || isError || !isSuccess}
            >
              <Link to="enterCode" className="text-light">
                التحقق من الرمز
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
