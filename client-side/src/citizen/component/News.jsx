import React from "react";
import "./../style/privatestyle.css";
export const News = ({ news }) => {
  return (
    <>
      <div className="news mt-4">
        <h5 className="spec-h3 p-2 text-center">اخر الاعلامات</h5>
        <div className="moveText mt-3">
          <p className="moving-text text-center h6 m-0">{news}</p>
        </div>
      </div>
    </>
  );
};
