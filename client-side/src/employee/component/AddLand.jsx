import React, { useState } from "react";
import { api } from "../../utiltis/api.js";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AddLand = () => {
  const [inputs, setInputs] = useState({
    id: "",
    Pelvis_id: "",
    Land_id: "",
    District_name: "",
    village_name: "",
    Governorate_name: "",
  });
  const [success, setSuccess] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("lands", inputs["lands"]);
    formData.append("Pelvis_id", inputs["Pelvis_id"]);
    formData.append("Land_id", inputs["Land_id"]);
    formData.append("id", inputs["id"]);
    formData.append("District_name", inputs["District_name"]);
    formData.append("village_name", inputs["village_name"]);
    formData.append("Governorate_name", inputs["Governorate_name"]);
    // console.log("ss");
    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        const res = await api(token).post("/employee/create_land", formData);
        if (res.status === 201) {
          setSuccess(true);
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
      }
    });
  };
  return (
    <div className="container-fluid">
      <h2 className="text-center text-secondary py-2 mt-4">اضافة أرض</h2>

      <div className="container d-flex justify-content-center">
        <form className="rounded border p-3 w-75" onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="exampleInputEmail1">رقم هوية المواطن</label>
            <input
              type="number"
              min={0}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="id"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">رقم الحوض</label>
            <input
              type="number"
              min={0}
              className="form-control"
              id="exampleInputPassword1"
              name="Pelvis_id"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">رقم القطعة</label>
            <input
              type="number"
              min={0}
              required
              className="form-control"
              id="exampleInputPassword1"
              name="Land_id"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">اسم الحي</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
              name="District_name"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">القرية</label>
            <input
              type="text"
              className="form-control"
              required
              id="exampleInputPassword1"
              name="village_name"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">المحافظة</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
              name="Governorate_name"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="exampleInputPassword1">الصحيفة</label>
            <input
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              required
              onChange={(e) =>
                setInputs({ ...inputs, lands: e.target.files[0] })
              }
            />
          </div>
          <button type="submit" disabled={success} className="btn btn-primary">
            اضافة
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLand;
