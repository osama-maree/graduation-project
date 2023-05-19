import React from "react";
import { useState } from "react";
// import Data2 from "./Data2";
import { useGetLandMuniMutation } from "../../services/taboJsonApi.js";
import DescLand from "./DescLand.jsx";

function Municipality() {
  let [pelvis, setPelvis] = useState(); //رقم الحوض
  let [land, setLand] = useState();
  let [village, setVillage] = useState();
  const [getLand, { data }] = useGetLandMuniMutation();

  function takeData() {
    //نحفظ الداتا هنا بعد الضغط على زر البحث
    getLand({
      land_number: land,
      district_number: village,
      pelvise_number: pelvis,
    });
  }
  // console.log(land)
  return (
    <>
      <div className="bg-white container-fluid">
        <div>
          <h2 className="text-center  text-dark  py-4">البلدية</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="" className="label text-primary mt-3">
                    رقم الحي
                  </label>
                  <input
                    type="search"
                    className="form-control mt-1"
                    placeholder="ادخل رقم الحي"
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
                <DescLand value={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Municipality;
