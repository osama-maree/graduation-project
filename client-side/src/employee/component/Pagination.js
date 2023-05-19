import React, { useState } from "react";
import _ from "lodash";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./../style/pagination.css";
export const Pagination = ({
  users,
  changePageNumber,
  pageNumber,
  pageSize,
}) => {
  let [Page, setPage] = useState([0, 1, 2, 3]);
  const [currentPage, setCurrentPage] = useState(Page?.length);
  const pageCount = Math.ceil(users?.length / pageSize);
// console.log(pageCount)
//   if (pageCount === 1) {
//     return <></>;
//   }
  const pages = _.range(0, pageCount); //when no trans
  const chanePage = () => {
    let inter;
    let y = Page?.length;
    if (currentPage - 8 < 0) {
      inter = _.range(0, 4);
    } else {
      inter = _.range(currentPage - (y + 4), currentPage - y);
    }
    setPage(inter);
    setCurrentPage(inter[inter?.length - 1] + 1);
  };
  const chanePageNext = () => {
    let inter;
    if (currentPage + 4 <= pageCount) {
      inter = _.range(currentPage, currentPage + 4);
    } else {
      inter = _.range(currentPage, pageCount);
    }
    setPage(inter);
    setCurrentPage(inter[inter?.length - 1] + 1);
  };
 
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination d-flex justify-content-between m-0">
        <div className="container">
          <div className="row">
            {pageCount > 5 ? (
              <div className="d-flex col-md-8 m-0 p-0">
                <li className="page-item">
                  <button
                    disabled={currentPage < 5}
                    onClick={chanePage}
                    className="p-1 border h-100"
                    style={{ cursor: "pointer" }}
                  >
                  السابق
                  </button>
                </li>
                {Page?.map((page) => (
                  <li
                    className="page-item"
                    key={page}
                    onClick={() => changePageNumber(page)}
                  >
                    <span
                      className={
                        page === pageNumber ? "page-link active" : "page-link"
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {page + 1}
                    </span>
                  </li>
                ))}
                <li className="page-item">
                  <button
                    disabled={currentPage >= pageCount}
                    className="p-1 border h-100"
                    onClick={chanePageNext}
                    style={{ cursor: "pointer" }}
                  >
                   التالي
                  </button>
                </li>
              </div>
            ) : (
              <div className="d-flex col-md-8 m-0 p-0">
                {pages?.map((page) => (
                  <li
                    className="page-item"
                    key={page}
                    onClick={() => changePageNumber(page)}
                  >
                    <span
                      className={
                        page === pageNumber ? "page-link active" : "page-link"
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {page + 1}
                    </span>
                  </li>
                ))}
              </div>
            )}
            <div className="col-md-4 m-0 p-0">
              <div className="d-flex justify-content-end">
                <Link to="/homeEmployee" className="h6  ps-2 borderBottom ">
                  رجوع
                </Link>
                <IoMdArrowRoundBack
                  style={{ fontSize: "1.5rem" }}
                  className="text-success ms-2"
                />
              </div>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};
