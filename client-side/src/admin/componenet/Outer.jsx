import React from "react";
import { useEffect, useState } from "react";
// import {  } from "react";
// import Data1 from "./Data1";
import { useGetOterQuery } from "../../services/taboJsonApi.js";
import DetailsOter from "./DetailsOuter.jsx";

function Outer() {
  const [data1, setData1] = useState({ id: "---", photo: "---" });

  let [id, setValue] = useState();
  const { data, refetch } = useGetOterQuery({ id });
  useEffect(() => {
    if (data) {
      setData1(data);
    } else {
      setData1({ id: "---", photo: "---" });
    }
  }, [data]);
  function takeData() {
    refetch();
  }


  return (
    <>
      <div className="bg-white container-fluid pb-2 ">
        <div>
          <h2 className="text-center py-3 text-dark ">وزارة الخارجية </h2>
          <div className="container">
            <div className="row">
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
                    placeholder="ادخل رقم الوثيقة"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <DetailsOter value={data1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Outer;
