import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCustomUpdateMutation } from "../../services/taboJsonApi.js";

const NotCompleted = ({ _id, type }) => {
  // console.log(type);
  const navigate = useNavigate();
  const [Accept, setAccept] = useState();
  const [Reject, setReject] = useState();
  const [message, setmessage] = useState();
  const [cost, setcost] = useState();
  const [updateTrans, { isLoading, isError, isSuccess }] =
    useCustomUpdateMutation();
  const AcceptTrans = () => {
    setAccept(1);
    setReject(null);
  };
  const RejectTrans = () => {
    setReject(2);
    setAccept(null);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    if (!Accept && !Reject) {
      Swal.fire({
        title: "الرجاء تحديد حالة المعاملة",
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
          const state = Accept ? Accept : Reject;
          updateTrans({ message, state, type, _id, cost });
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
    <div className="d-flex justify-content-between mt-2  border">
      <div className="container">
        <div className="row">
          <div className="col-md-9 m-0 p-0">
            <Form className="d-flex me-3 my-2 gap-3" onSubmit={handleUpload}>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={AcceptTrans}
                className={Accept ? "btn btn-success" : "btn btn-dark"}
              >
                قبول
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={RejectTrans}
                className={Reject ? "btn btn-danger" : "btn btn-dark"}
              >
                رفض
              </div>

              <Form.Group>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => setmessage(e.target.value)}
                  placeholder="اكتب الرسالة هنا"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  onChange={(e) => setcost(e.target.value)}
                  placeholder="أدخل التكلفة هنا"
                />
              </Form.Group>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                ارسال
              </button>
            </Form>
          </div>
          <div className="col-md-3 m-0 p-0">
            <div className="mt-2 d-flex justify-content-end">
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
        </div>
      </div>
    </div>
  );
};

export default NotCompleted;
