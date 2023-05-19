import React, { useEffect, useRef } from "react";
import { useCreateNewsMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";

const AddNews = () => {
  const roleRef = useRef();
  const newsRef = useRef();
  const [creatNews, { isLoading, isError, isSuccess }] =
    useCreateNewsMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    creatNews({
      text: newsRef.current.value,
      forAccount: roleRef.current.value,
    });
  };

  useEffect(() => {
    // console.log(data);
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
    <div className="container-fluid">
      <h2 className="text-center text-secondary py-2 mt-4">اضافة خبر</h2>

      <div className="container d-flex   justify-content-center">
        <form className="border p-2 rounded mt-2 w-75" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="اكتب الخبر"
            required
            className="form-control"
            ref={newsRef}
          />
          <select
            className="form-select mt-2"
            aria-label="Default select example"
            ref={roleRef}
          >
            <option value="employee">الموظفين</option>
            <option value="user">المواطنين</option>
          </select>
          <input
            type="submit"
            disabled={isLoading}
            className="btn btn-primary m-2"
            value="اضافة"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNews;
