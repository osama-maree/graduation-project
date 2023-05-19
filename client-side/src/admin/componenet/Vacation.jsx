import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataForEm from "./DataForEm";
import NavForAdmin from "./../componenet/NavForAdmin.jsx";
import { useGetEmployeeIdQuery } from "../../services/taboJsonApi.js";
function Vacation() {
  const trying = {
    id: "---",
    fullName: "---",
    email: "---",
    freez: null,
  };
  const [emp, setEmp] = useState(trying);
  let [value, setValue] = useState();
  // let [data, setData] = useState(trying);
  const { data, refetch } = useGetEmployeeIdQuery({ id: value });
  useEffect(() => {
    if (data) {
      setEmp(data);
    } else {
      setEmp(trying);
    }
  }, [data]);
  function takeData() {
    // setFinal(value);
    refetch();
  }
  // console.log(data)
  return (
    <>
      <NavForAdmin />
      <div className="bg-white container-fluid">
        <div className="mt-5 pt-5">
          <div className="container ">
            <div className="row ">
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-primary"
                    id="inputGroup-sizing-default"
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        takeData();
                      }}
                    >
                      بحث
                    </button>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="ادخل رقم الهوية"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-9 pb-4">
                <DataForEm value={emp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacation;
