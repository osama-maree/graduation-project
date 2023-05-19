import { Button } from "react-bootstrap";
// import { Fo} from "react-router-dom";
import Joi from "joi";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCustomUpdateAccountMutation } from "../../services/taboJsonApi.js";
const Updateaccount = ({ Form, Card, inputs, setInputs }) => {
  const [errors, setError] = useState({});
  const [UpdateAccount, { isLoading, isError, isSuccess }] =
    useCustomUpdateAccountMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (isError) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess, isError]);
  const registerSchema = Joi.object({
    fullName: Joi.string().min(5).max(40).required(),
    address: Joi.string().required(),
    phoneNumber: Joi.required(),
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
  const Submit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `للاستمرار اضفط موافق`,
      showCancelButton: true,
      icon: "success",
      confirmButtonText: "موافق",
      cancelButtonText: "إلغاء",
      customClass: {
        confirmButton: "bg-success",
        cancelButton: "bg-danger",
      },
    }).then((res) => {
      if (res.isConfirmed) {
        UpdateAccount(inputs);
      }
    });
  };

  return (
    <div className="container my-3 ">
      <Card className="m-auto  bg-light ">
        <Card.Body>
          {/* {errors && <Alert variant="danger">{errors}</Alert>} */}
          <Form onSubmit={Submit}>
            <Form.Group>
              <Form.Label htmlFor="name">الاسم</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={inputs?.fullName}
                name="fullName"
                disabled
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="address">العنوان</Form.Label>
              <Form.Control
                type="text"
                onChange={onChange}
                id="address"
                name="address"
                value={inputs?.address}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="phone">رقم الهاتف</Form.Label>
              <Form.Control
                type="number"
                name="phoneNumber"
                onChange={onChange}
                id="phone"
                value={inputs?.phoneNumber}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 bg-success mt-3 submit"
              disabled={
                Object.keys(errors).length
                  ? true
                  : false || isLoading || !inputs?.fullName
              }
            >
              تعديل
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Updateaccount;
