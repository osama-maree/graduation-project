import React, { useRef, useState } from "react";
import { api } from "../../utiltis/api.js";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const AddModal = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const { token } = useSelector((state) => state.auth);
  const [img, setImage] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", titleRef.current.value);
    formData.append("text", textRef.current.value);
    const res = await api(token).post("/employee/addmodal", formData);
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        text: "تمت العملية بنجاح",
        animation: false,
        position: "center",
        showConfirmButton: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "تعذرت العملية",
        animation: false,
        showConfirmButton: true,
        timer: 3000,
        position: "center",
      });
    }
  };
  return (
    <div className="container-fluid">
      <h2 className="text-center text-secondary py-2 mt-4">اضافة حالة</h2>

      <div className="container d-flex   justify-content-center">
        <form className="border p-2 mt-2 rounded w-75" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              العنوان
            </label>
            <input
              className="form-control"
              ref={titleRef}
              type="text"
              required
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              النص
            </label>
            <input
              className="form-control"
              ref={textRef}
              type="text"
              required
              id="formFile"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              الصورة
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
              id="formFile"
            />
          </div>
          <input type="submit" className="btn btn-primary m-1" />
        </form>
      </div>
    </div>
  );
};

export default AddModal;
