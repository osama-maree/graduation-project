import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useVeriFyCodeMutation } from "../../services/taboJsonApi.js";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const EnterCode = () => {
  const [Code, setCode] = useState();
  const [verifyCode, { isLoading, isError, isSuccess }] =
    useVeriFyCodeMutation();
  const { role, email } = useSelector((state) => state.forgot);
  const handleUpload = async (e) => {
    e.preventDefault();
    await verifyCode({ email, role, code: Code });
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
          <Form onSubmit={handleUpload}>
            <Form.Group>
              <Form.Label htmlFor="code">ادخل الرمز هنا</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setCode(e.target.value)}
                id="code"
              />
            </Form.Group>

            <div className="d-flex align-items-center justify-content-between">
              <Button
                variant="danger"
                type="submit"
                className="w-45 mt-3"
                disabled={isLoading||isSuccess}
              >
                تحقق
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <Button
              variant="success"
              disabled={isLoading || isError || !isSuccess}
            >
              <Link to="updatedpassword" className="text-light">
                تعديل كلمة المرور
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
