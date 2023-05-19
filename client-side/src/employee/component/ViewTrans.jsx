import React, { useEffect } from "react";
import TransactionComp from "./TransactionComp.jsx";
import "./../style/customstyle.css";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Pagination } from "./Pagination.js";
import { useGetCustomTranactionQuery } from "../../services/taboJsonApi.js";
import Loading from "../../Laoding.jsx";
import Dict from "../../services/dummyData.js";
// import Search from "./Search.jsx";

const ViewTrans = () => {
  const { type, id, subtype } = useParams();
  // const [Search, setSearch] = useState()
  const [trans, setTrans] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pageNumber: 0,
    pageSize: 12,
  });
  const title = type + subtype;

  const { data, isLoading, isSuccess } = useGetCustomTranactionQuery({
    type,
    id,
  });
  useEffect(() => {
    setTrans(data);
  }, [isSuccess]);
  if (isLoading) {
    return <Loading />;
  }
  // if(isSuccess){
  //   return setTrans(data)
  // }

  // console.log(console.log(title));
  const changePageNumber = (page) => {
    setPageInfo({ ...pageInfo, pageNumber: page });
  };
  //  if(Search){
  //   data=data.find(e=>e.id === Search)
  //  }
  const Search = (e) => {
    const { value } = e.target;
    const arr = [];
    data.map((T) => {
      if (T.id.toString().startsWith(value)) {
        arr.push(T);
      }
    });
    setTrans(arr);
  };

  return (
    <div className="container-fluid bgStyle mt-2 mb-2 ">
      <div className="container border py-2">
        {/* <TopComp /> */}
        <div className="border p-2 mb-2">
          <h5 className="spec-h3 p-2 text-center">{Dict[title]}</h5>
          <input
            type="number"
            min={0}
            className="form-control m-1 w-25 mb-2 "
            onChange={Search}
            placeholder="للبحث عن معاملة"
          />
          <table className="table m-0 table-bordered">
            <thead>
              <tr className="header1 text-center">
                <th scope="col">#</th>
                <th scope="col">رقم الحركة</th>
                <th scope="col">التكلفة</th>
                <th scope="col">نوع الحركة</th>
                <th scope="col">اسم المواطن</th>
                <th scope="col" className="drop1">
                  {" "}
                  تاريخ التقديم
                </th>
                <th scope="col">مزيد من المعلومات</th>
              </tr>
            </thead>
            <tbody>
              <TransactionComp
                trans={trans}
                pageInfo={pageInfo}
                type={type}
                title={subtype}
                Search={Search}
              />
            </tbody>
          </table>
        </div>

        <div className="border py-2">
          <Pagination
            users={trans}
            changePageNumber={changePageNumber}
            {...pageInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewTrans;
