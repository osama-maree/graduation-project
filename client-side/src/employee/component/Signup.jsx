import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";
import "./../style/signup.css";
import Joi from "joi";
import { useCreateAccountForUserMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";
const Signup = () => {
  const [creatAccount, { isLoading, isError, isSuccess }] =
    useCreateAccountForUserMutation();
  const [inputs, setInputs] = useState({});
  const [Show, setShow] = useState(false);
  const [errors, setError] = useState({
    email: "",
    fullName: "",
    address: "",
    birthDate: "",
    phoneNumber: "",
    password: "",
    id: "",
  });

  const registerSchema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    fullName: Joi.string().min(5).max(40).required(),
    password: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/
        )
      ),
    address: Joi.string().required(),
    phoneNumber: Joi.required(),
    birthDate: Joi.required(),
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
      setError({ ...errors, [name]: validation.error.details[0].message });
    } else {
      const err = { ...errors };
      delete err[name];
      setError({ ...err });
    }
    // console.log(Object.keys(errors).length);
    // console.log(errors);
    setInputs({ ...inputs, [name]: value });
  };
  // console.log(errors);
  const handleUpload = (e) => {
    e.preventDefault();
    // console.log(inputs)
    creatAccount(inputs);
  };
  useEffect(() => {
    // console.log(isError);
    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    if (isSuccess) {
      Swal.fire({
        toast: true,
        icon: "success",
        text: "تمت العملية بنجاح",
        animation: false,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 3000,
      });

      wait(2000) // Wait for 2 seconds
        .then(() => {
          window.location.reload();
        });
    } else if (isError) {
      Swal.fire({
        toast: true,
        icon: "error",
        text: "تعذرت العملية",
        animation: false,
        showConfirmButton: false,
        timer: 3000,
        position: "bottom-right",
      });

      wait(2000) // Wait for 2 seconds
        .then(() => {
          window.location.reload();
        });
    }

    // console.log(data);
  }, [isSuccess, isError]);
  return (
    <div className="container-fluid styleT">
      <Card className="m-auto w-50 bg-light ">
        <Card.Body>
          {/* {errors && <Alert variant="danger">{errors}</Alert>} */}
          <Form onSubmit={handleUpload}>
            <Form.Group>
              <Form.Label htmlFor="name">الاسم</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="fullName"
                onChange={onChange}
                className={
                  errors["fullName"]
                    ? "text-danger alert-warning"
                    : "text-success"
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">الايميل</Form.Label>
              <Form.Control
                type="email"
                id="email"
                onChange={onChange}
                name="email"
                className={errors["email"] ? "text-danger" : "text-success"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">كلمة السر</Form.Label>
              <Form.Control
                type="password"
                onChange={onChange}
                id="password"
                name="password"
                // onClick={() => setShow(true)}
                onFocus={() => setShow(true)}
                className={errors["password"] ? "text-danger " : "text-success"}
              />
              {Show && errors["password"] ? (
                <ListGroup className="mt-2">
                  <ListGroup.Item className="text-danger">
                    يجب ان يتكون من ثمانِ حروف على الاقل
                  </ListGroup.Item>
                  <ListGroup.Item className="text-danger">
                    يجب ان يحتوي على رقم واحد على الاقل
                  </ListGroup.Item>
                  <ListGroup.Item className="text-danger">
                    يجب ان يحتوي على حرف كبير على الاقل
                  </ListGroup.Item>
                  <ListGroup.Item className="text-danger">
                    يجب ان يحتوي على حرف صغير على الاقل
                  </ListGroup.Item>
                  <ListGroup.Item className="text-danger">
                    يجب ان يحتوي على رمز على الاقل
                  </ListGroup.Item>
                </ListGroup>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="address">العنوان</Form.Label>
              <Form.Control
                type="text"
                onChange={onChange}
                id="address"
                name="address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="birthDate">تاريخ الميلاد</Form.Label>
              <Form.Control
                placeholder="سنة-شهر-يوم"
                id="birthDate"
                type="date"
                name="birthDate"
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="phone">رقم الهاتف</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                onChange={onChange}
                id="phone"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="ID">رقم الهوية</Form.Label>
              <Form.Control
                type="number"
                name="id"
                onChange={onChange}
                id="ID"
                className={errors["id"] ? "text-danger" : "text-success"}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100  mt-3 submit"
              style={{ backgroundColor: "#CD9042" }}
              disabled={Object.keys(errors).length ? true : false || isLoading}
            >
              انشاء
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
