import React from "react";

function DetailsCourt(props) {
  return (
    <div>
      {props.value.map((e) => {
        return (
          <div
            className="list-group"
            id="list-tab"
            role="tablist"
            key={e.User_ID}
          >
            <li className="list-group-item list-group-item-action active">
              <h3 className="text-center">الوثائق</h3>
            </li>
            <li className="list-group-item list-group-item-action ">
              <h4 className="text-primary ">رقم الوثيقة : </h4>
              <h5 className="text-center text-success">{e.User_ID}</h5>
            </li>
            <li className="list-group-item list-group-item-action">
              <h4 className="text-primary "> وثيقة حصر ارث </h4>
              <div className="text-center">
                <button className="btn btn-success h6 pb-1">عرض</button>
              </div>
            </li>
            <li className="list-group-item list-group-item-action">
              <h4 className="text-primary "> عقد البيع </h4>
              <div className="text-center">
                <button className="btn btn-success h6 pb-1">عرض</button>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default DetailsCourt;
