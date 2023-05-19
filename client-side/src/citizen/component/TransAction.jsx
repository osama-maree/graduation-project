import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewRows from "./ViewRows.jsx";
import { useGetSingleTransactionQuery } from "../../services/taboJsonApi.js";
import Dict from "../../services/dummyData.js";
import Loading from "../../Laoding.jsx";

const TransAction = () => {
  const { id, type } = useParams();
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
  // console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {!isLoading ? (
        <div className="container-fluid bgStyle mt-4">
          <div className="container border py-2 ">
            {/* <TopComp /> */}
            <div className="border p-2">
              <h5 className="spec-h3 p-2 text-center">{`${data?.Movement_type} ${data?.MoveState}`}</h5>

              <table className="table  m-0 table-bordered">
                <thead>
                  <tr className="header1 text-center">
                    <th scope="col">#</th>
                    <th scope="col">الاوراق المطلوبة</th>
                    <th scope="col">عرض</th>
                    {data?.MoveState === "جاري المعالجة" && (
                      <th scope="col">تعديل</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <ViewRows
                    trans={trans}
                    id={id}
                    type={type}
                    CustomTrans={CustomTrans}
                    moveState={data?.MoveState}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        "is Loading"
      )}
    </>
  );
};

export default TransAction;
