import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { usePaidFeesMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";
// import { AiOutlineSearch } from "react-icons/ai";

const Accept = ({ type, _id }) => {
  const [Done, setDone] = useState(false);
  const [message, setmessage] = useState();
  const navigate = useNavigate();
  const [updateTransFees, { isLoading, isError, isSuccess }] =
    usePaidFeesMutation();
  const handleUpload = (e) => {
    e.preventDefault();
    if (!Done) {
      Swal.fire({
        title: "الرجاء الضغط على دفع الرسوم لتصبح باللون الاخضر",
        icon: "warning",
        confirmButtonColor: "green",
      });
    } else {
      Swal.fire({
        title: "للاكمال اضغط موافق",
        icon: "question",
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        showCancelButton: true,
        confirmButtonText: "موافق",
        cancelButtonText: "إلغاء الطلب",
      }).then((res) => {
        if (res.isConfirmed) {
          updateTransFees({ message, type, _id });
        }
      });
    }
  };
  useEffect(() => {
    if (isError) {
      Swal.fire({
        title: "خطأ",
        icon: "error",
        confirmButtonColor: "green",
      });
    } else if (isSuccess) {
      Swal.fire({
        title: "تم تحديث المعاملة",
        icon: "success",
        confirmButtonColor: "green",
      });
      function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      wait(2000) // Wait for 2 seconds
        .then(() => {
          return navigate("/homeEmployee");
        });
    }
  }, [isLoading]);
  return (
    <div className="border mb-2 d-flex justify-content-between mt-2  ">
      <Form className="d-flex me-3 my-2 gap-3" onSubmit={handleUpload}>
        <Form.Group>
          <div
            style={{
              cursor: "pointer",
            }}
            className={
              Done ? "btn bg-success text-white" : "btn bg-dark text-white"
            }
            onClick={() => setDone((d) => !d)}
          >
            دفع الرسوم
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            required
            onChange={(e) => setmessage(e.target.value)}
            placeholder="اكتب الرسالة هنا"
          />
        </Form.Group>
        <button className="btn btn-primary">ارسال</button>
      </Form>
      <div className="mt-2">
        <span
          onClick={() => navigate(-1)}
          className="h6  ps-2 borderBottom text-primary "
          style={{ cursor: "pointer" }}
        >
          رجوع
        </span>
        <IoMdArrowRoundBack
          style={{ fontSize: "1.5rem" }}
          className="text-success ms-2"
        />
      </div>
    </div>
  );
};

export default Accept;
