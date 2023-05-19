import React, { useEffect, useState } from "react";
// import NavForAdmin from "../homePage/NavForAdmin.js";
import { useNavigate, useParams } from "react-router-dom";
import { useGetManagerTransQuery } from "../../services/taboJsonApi.js";
import Loading from "../../Laoding.jsx";
import { Table } from "react-bootstrap";
import Dict from "../../services/dummyData.js";
// import transactions from "../../employee/transaction/Data.js";

const Works = () => {
  const { type, id } = useParams();
  const dic = type + "osama";
  const [tranaction, setTrans] = useState([]);
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const { data, isLoading, isSuccess } = useGetManagerTransQuery({ type, id });
  // console.log(data);
  useEffect(() => {
    if (data) setTrans(data);
  }, [isSuccess]);
  if (isLoading) return <Loading />;

  // console.log(data);
  const Search = (e) => {
    const { value } = e.target;
    const arr = [];
    data.map((T) => {
      if (T.MoveState.startsWith(value)) {
        arr.push(T);
      }
    });
    setTrans(arr);
  };
  const countNumber = (e) => {
    const { value } = e.target;
    setNumber(data?.filter((e) => e.MoveState === value).length);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="container ">
          <div className="border p-2 mb-2 rounded">
            <h5 className=" p-2 text-center ">{Dict[dic]}</h5>
            <input
              type="text"
              className="form-control m-1 w-25 mb-2 "
              onChange={Search}
              placeholder="البحث بناء على الحالة"
            />

            <Table striped className="border">
              <thead className="table-style text-white text-center">
                <tr>
                  <th>#</th>
                  <th>الحالة</th>
                  <th>اسم المواطن</th>
                  <td>تاريخ الانشاء</td>
                  <td>تاريخ التعديل</td>
                </tr>
              </thead>

              <tbody className="text-center">
                {tranaction?.map((item, indx) => (
                  <tr key={indx}>
                    <td>{item.id}</td>
                    <td>{item.MoveState}</td>
                    <td>{item.userId.fullName}</td>
                    <td>
                      {" "}
                      {new Date(item.createdAt).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </td>
                    <td>
                      {new Date(item.updatedAt).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex gap-5">
              <input
                type="text"
                className="form-control m-1 w-25 mb-2 "
                onChange={countNumber}
                placeholder="لعدد حالة معين ادخل الحالة"
              />
              <div className="m-1 text-center border p-2 rounded">{number}</div>
            </div>
            <button
              className="btn btn-primary mt-2"
              onClick={() => navigate(-1)}
            >
              {" "}
              رجوع
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
