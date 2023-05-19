import React from "react";
import { useEffect, useState } from "react";
// import { } from 'react'
// import Data4 from './Data4';
import DetailsCourt from "./DetailsCourt.jsx";

function LimitingLegacy() {
  const trying = [
    {
      User_ID: "---",
      Limiting_a_Legacy: "---",
      Contract_of_Sale: "---",
    },
  ];

  let [value, setValue] = useState();
  let [data, setData] = useState(trying);
  let [final, setFinal] = useState();

  function takeData() {
    setFinal(value);
  }

  useEffect(() => {
    function getCitizenData() {
      fetch(`http://localhost:4000/sharia_${final}`)
        .then((response) => {
          if (response.status === 404) {
            return [
              {
                User_ID: "---",
                Limiting_a_Legacy: "---",
                Contract_of_Sale: "---",
              },
            ];
          } else {
            return response.json();
          }
        })
        .then((data) => setData(data));
    }
    getCitizenData();
  }, [final]);

  return (
    <>
      <div className="bg-white container-fluid">
        <div>
          <h2 className="text-center py-3 text-dark"> المحكمة الشرعية </h2>
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
                <DetailsCourt value={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LimitingLegacy;
