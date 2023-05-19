import React, { useEffect, useState } from "react";
import DetailLands from "./DetailLands.jsx";
import { useGetLandForEmpMutation } from "../../services/taboJsonApi.js";

const FreezLand = () => {
  const def = {
    id: "--",
    Pelvis_id: "--",
    Land_id: "--",
    village_name: "--",
    Governorate_name: "--",
  };
  const [land, setLand] = useState(def);
  const [getLand, { data, isError, isSuccess }] = useGetLandForEmpMutation();
  useEffect(() => {
    if (isSuccess && data) {
      setLand(data);
      console.log(data);
    } else {
      setLand(def);
    }
  }, [data]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setLand({ ...land, [name]: value });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    getLand(land);
  };
  return (
    <>
      <div className=" container-fluid">
        <div>
          <h2 className="text-center  text-secondary  py-4">تجميد أرض</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-3 mt-4">
                <form onSubmit={handleUpload} className="border p-2 rounded">
                  <div className="mb-3 border p-2 rounded">
                    <label htmlFor="" className="label text-primary ">
                      المحافظة
                    </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="ادخل اسم المحافظة"
                      name="Governorate_name"
                      onChange={onChange}
                    />
                    <label htmlFor="" className="label text-primary mt-3">
                      القرية
                    </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      name="village_name"
                      placeholder="ادخل اسم القرية"
                      onChange={onChange}
                    />
                    <label htmlFor="" className="label text-primary mt-3">
                      رقم الحوض
                    </label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="ادخل رقم الحوض"
                      name="Pelvis_id"
                      onChange={onChange}
                    />
                    <label htmlFor="" className="label text-primary mt-3">
                      رقم الارض
                    </label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      placeholder="ادخل رقم الارض"
                      name="Land_id"
                      onChange={onChange}
                    />
                    <label htmlFor="" className="label text-primary mt-3">
                      رقم هوية المواطن
                    </label>
                    <input
                      type="number"
                      name="id"
                      className="form-control mt-1"
                      placeholder="ادخل رقم الارض"
                      onChange={onChange}
                    />
                  </div>
                  <button
                    className="btn btn-block btn-primary mt-2 "
                    // onClick={() => {
                    //   takeData();
                    // }}
                  >
                    بحث
                  </button>
                </form>
              </div>
              <div className="col-md-9 pb-4 pt-2">
                <DetailLands value={isSuccess ? data : def} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreezLand;
