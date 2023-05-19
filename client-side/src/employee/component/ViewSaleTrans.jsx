import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accept from "./Accept.jsx";
// import { IoMdArrowRoundBack } from "react-icons/io";
import NotCompleted from "./NotCompleted.jsx";
import ViewRows from "./ViewRows.jsx";
import { useGetSingleTransactionQuery } from "../../services/taboJsonApi.js";
import Dict from "../../services/dummyData.js";
import Loading from "../../Laoding.jsx";
const ViewSaleTrans = () => {
  const { id, type, title } = useParams();
  const [trans, setTrans] = useState([]);
  const [CustomTrans, setCustomTrans] = useState([]);

  const { data, isLoading } = useGetSingleTransactionQuery({ type, id });

  useEffect(() => {
    if (isLoading === false) {
      let arr = [];
      let arr2 = [];
      for (let i of Object.keys(data)) {
        if (
          i === "_id" ||
          i === "id" ||
          i === "message" ||
          i === "cost" ||
          i === "userId" ||
          i === "employeeId" ||
          i === "__v" ||
          i === "updatedAt"
        ) {
          continue;
        } else if (
          i !== "state" &&
          i !== "MoveState" &&
          i !== "feesDone" &&
          i !== "Movement_type"
        ) {
          arr.push({ name: i, value: data[i] });
        } else {
          arr2.push({ name: i, value: data[i] });
        }
      }

      setCustomTrans(() => arr2);
      setTrans(() => arr);
    }
  }, [isLoading]);
  if (isLoading) {
    return <Loading />;
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  //console.log(data)
  return (
    <>
      <div className="container-fluid bgStyle mt-2">
        <div className="container border py-2 ">
          {/* <TopComp /> */}
          <div className="border p-2">
            <h5 className="spec-h3 p-2 text-center">
              {" "}
              {data?.Movement_type + " " + Dict[title]}
            </h5>

            <table className="table  m-0 table-bordered">
              <thead>
                <tr className="header1 text-center">
                  <th scope="col">#</th>
                  <th scope="col">الاوراق المطلوبة</th>
                  <th scope="col">عرض</th>
                </tr>
              </thead>
              <tbody>
                <ViewRows
                  trans={trans}
                  options={options}
                  CustomTrans={CustomTrans}
                />
              </tbody>
            </table>
          </div>
          {data?.state === 1 && <Accept _id={data?._id} type={type} />}
          {data?.state === 0 && <NotCompleted _id={data?._id} type={type} />}
        </div>
      </div>
    </>
  );
};

export default ViewSaleTrans;
