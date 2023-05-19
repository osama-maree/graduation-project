import Table from "react-bootstrap/Table";
import "../style/style.css";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import { drop } from "./../../services/view.js";
import { useGetEmployeeQuery } from "../../services/taboJsonApi.js";
import Loading from "./../../Laoding.jsx";
// import NavForAdmin from "../homePage/NavForAdmin.js";
// import Dropdown  from "./Dropdown.js";

function View() {
  const navigate=useNavigate()
  const { data, isLoading } = useGetEmployeeQuery();

  if (isLoading) return <Loading />;
  //  console.log(data);
  return (
    <div className="container-fluid mt-3">
      <div className="container rounded">
        <Table striped className="border">
          <thead className="table-style text-white text-center">
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>الايميل</th>
              <th>رقم الهوية</th>
              <th>الحالة</th>
              <th>المهام</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, indx) => (
              <tr className="py-3 text-center" key={indx}>
                <td>{indx + 1}</td>
                <td>{item?.fullName}</td>
                <td>{item?.email}</td>
                <td>{item?.id}</td>
                <td>{item?.freez ? "مجاز" :"غير مجاز"}</td>

                <td>
                  <div className="dropdown">
                    <li className="btn btn-success">
                      <a
                        className="nav-link dropdown-toggle"
                        href="//#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        المهام
                      </a>
                      <ul className="dropdown-menu">
                        {drop.map((d, indx) => (
                          <div key={indx}>
                            <li>
                              <Link
                                className="dropdown-item text-end"
                                to={`/working/${d.type}/${item?._id}`}
                              >
                                {d.trans}
                              </Link>
                            </li>
                            {d.type !== "mort" && (
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                            )}
                          </div>
                        ))}
                      </ul>
                    </li>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button className="btn btn-primary " onClick={()=>navigate(-1)}>رجوع</button>
      </div>
    </div>
  );
}

export default View;
