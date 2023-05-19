import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Data5 from "./Data5";
import { useGetAreaDepMutation } from "../../services/taboJsonApi.js";
import DetailsAreaDep from "./DetailsAreaDep.jsx";
function AreaDep() {
  let [governorate, setGovernorate] = useState(); //المحافظة
  let [pelvis, setPelvis] = useState(); //رقم الحوض
  let [land, setLand] = useState();
  let [village, setVillage] = useState();
  const starts = {
    Governorate: "---",
    pelvis_number: "---",
    land_number: "---",
    village: "---",
    area_chart: "---",
  };
  let [trying, setData] = useState(starts); //لحفظ البيانات القادمة من الداتا بيس
  const [getAreaChart, { data }] = useGetAreaDepMutation();

  function takeData() {
    getAreaChart({
      Governorate: governorate,
      pelvis_number: pelvis,
      village,
      land_number: land,
    });
  }
  useEffect(() => {
    if (data) {
      setData(data);
    } else {
      setData(starts);
    }
  }, [data]);
  // console.log(data);
  return (
    <>
      <div className="bg-light container-fluid">
        <div>
          <h2 className="text-center  text-dark bg-light py-4">
            دائرة المساحة{" "}
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="" className="label text-primary ">
                    المحافظة
                  </label>
                  <input
                    type="search"
                    className="form-control mt-1"
                    placeholder="ادخل اسم المحافظة"
                    onChange={(e) => setGovernorate(e.target.value)}
                  />
                  <label htmlFor="" className="label text-primary mt-3">
                    القرية
                  </label>
                  <input
                    type="search"
                    className="form-control mt-1"
                    placeholder="ادخل اسم القرية"
                    onChange={(e) => setVillage(e.target.value)}
                  />
                  <label htmlFor="" className="label text-primary mt-3">
                    رقم الحوض
                  </label>
                  <input
                    type="search"
                    className="form-control mt-1"
                    placeholder="ادخل رقم الحوض"
                    onChange={(e) => setPelvis(e.target.value)}
                  />
                  <label htmlFor="" className="label text-primary mt-3">
                    رقم الارض
                  </label>
                  <input
                    type="search"
                    className="form-control mt-1"
                    placeholder="ادخل رقم الارض"
                    onChange={(e) => setLand(e.target.value)}
                  />
                  <button
                    className="btn btn-block btn-primary mt-2 "
                    onClick={() => {
                      takeData();
                    }}
                  >
                    بحث
                  </button>
                </div>
              </div>
              <div className="col-md-9 pb-4 pt-2">
                <DetailsAreaDep value={trying} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaDep;
