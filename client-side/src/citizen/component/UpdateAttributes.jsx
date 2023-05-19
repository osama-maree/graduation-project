import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import dummyData from "../../services/dummyData.js";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const UpdateAttributes = () => {
  const { type, name, id, value } = useParams();

  const { token } = useSelector((state) => state.auth);
  const [Attr, setAttr] = useState();
  const handelUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", Attr);
    formData.append("value", value);
    formData.append("_id", id);
    formData.append("name", name);
    await axios
      .patch(
        `http://localhost:3000/api/v1/tabo/user/transaction/${type}`,
        formData,
        {
          headers: {
            token: `osama__${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: `تم الانتهاء`,
            icon: "success",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          text: `الرجاء اعادة المحاولة فشلت العملية`,
          icon: "error",
        });
      });
  };
  return (
    <Container className="mt-5 bg-dark rounded">
      <Card className="bg-dark rounded">
        <Card.Body>
          <Form onSubmit={handelUpload}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-white">{dummyData[name]}</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setAttr(e.target.files[0])}
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-3 bg-dark">
              تعديل
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateAttributes;
