import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Data3 from "./Data3";
import { useGetTaxQuery } from "../../services/taboJsonApi.js";
import DetailsTax from "./DetailsTax.jsx";
//import Data1 from './Data1';

function Tax() {
  const [id, setValue] = useState();
  const { data, refetch } = useGetTaxQuery({ id });
  let [data1, setData] = useState({ id: "---", photo: "---" });

  useEffect(() => {
    if (data) {
      setData(data);
    } else {
      setData({
        id: "---",
        photo: "---",
      });
    }
  }, [data]);
  function takeData() {
    refetch();
  }
  return (
    <>
      <div className="bg-white container-fluid pb-2">
        <div>
          <h2 className="text-center py-3 text-dark ">وزارة المالية </h2>
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
                <DetailsTax value={data1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tax;
