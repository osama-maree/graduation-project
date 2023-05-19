import React, { useEffect } from "react";
// import { useEffect } from "react";
import { useState } from "react";
// import Data from "./Data";
import { useGetUserIntiorQuery } from "../../services/taboJsonApi.js";
import DetailsInterior from "./DeatailsInterior.jsx";

function Interior() {
  const [trying, setTrying] = useState([
    {
      id: "---",
      name: "---",
      Date_of_Birth: "---",
      place_of_birth: "---",
      Mather_name: "---",
      photo: "---",
    },
  ]);

  let [id, setValue] = useState();
  const { data, refetch } = useGetUserIntiorQuery({ id });
  useEffect(() => {
    if (data) {
      let arr = [];
      arr.push(data);
      setTrying(() => arr);
    } else {
      setTrying([
        {
          id: "---",
          name: "---",
          Date_of_Birth: "---",
          place_of_birth: "---",
          Mather_name: "---",
          photo: "---",
        },
      ]);
    }
  }, [data]);
  // console.log(data);
  function takeData(e) {
    e.preventDefault();
    refetch();
  }

  return (
    <>
      <div className="bg-light container-fluid">
        <div>
          <h2 className="text-center py-4 text-dark bg-light">
            وزارة الداخلية{" "}
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-primary"
                    id="inputGroup-sizing-default"
                  >
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={takeData}
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
                <DetailsInterior value={trying} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interior;
