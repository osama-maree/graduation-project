import React from "react";
import "../style/dec.css";
const Declar = ({ news }) => {
  return (
    <div className="mt-4 newD mb-3 ">
      <h5 className="myhh p-2 text-center  text-secondary">
        اعلان هام الى جميع الموظفين
      </h5>
      <div className="moveText  mt-3 ">
        <p className="moving-text rounded text-center text-secondary  h5 m-0  py-2">
          {news}
        </p>
      </div>
    </div>
  );
};

export default Declar;
