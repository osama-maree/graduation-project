import axios from "axios";
import styles from "../style/Sales.module.css";
import { useState } from "react";

import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Alert } from "react-bootstrap";
function Inheretance() {
  const [limit, setLimit] = useState(); //ورقة حصر ارث
  const [kushan, setKushan] = useState(); //كوشان
  const [municipal, setMunicipal] = useState(); //براءة بلدية
  const [money, setMoney] = useState(); //براءة مالية
  const [imagesOfInhert, setImage] = useState(); //صور هوية الورثة
  const [outer, setOuter] = useState(); //تصديقات من الخارجية
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.auth);

  //handle data

  function handleLimit(event) {
    setLimit(event.target.files[0]);
  }

  function handleKushan(event) {
    setKushan(event.target.files[0]);
  }

  function handleMunicipal(event) {
    setMunicipal(event.target.files[0]);
  }

  function handleMoney(event) {
    setMoney(event.target.files[0]);
  }

  function handleImageInhert(event) {
    setImage(event.target.files[0]);
  }

  function handleOuter(event) {
    setOuter(event.target.files[0]);
  }

  // upload

  function handleUpload(e) {
    const formData = new FormData();
    formData.append("limit", limit);
    formData.append("kushan", kushan);
    formData.append("municipal", municipal);
    formData.append("money", money);
    formData.append(`imagesOfInhert`, imagesOfInhert);
    formData.append(`outer`, outer);
    e.preventDefault();

    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        setIsLoading(true);
        try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/tabo/user/create_tnheritance_transfer",
            formData,
            {
              headers: {
                token: `osama__${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (res.status === 201) {
            setIsSuccess(true);
            return setIsLoading(false);
          } else {
            setIsLoading(false);
            return setIsError(true);
          }
        } catch (err) {
          setIsLoading(false);
          return setIsError(true);
        }
      }
    });
  }

  return (
    <>
      <div className={`container-fluid text-light py-3 ${styles.Main}`}>
        <h2 className={`${styles.text} py-4`}>معاملة نقل ارث</h2>
        <form
          className={` ${styles.fff} bg-light rounded`}
          onSubmit={handleUpload}
        >
          {isSuccess && (
            <Alert variant="success text-center">تمت العملية بنجاح</Alert>
          )}
          {isError && <Alert variant="danger text-center">فشلت العملية</Alert>}
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile0"
              className={`form-label ${styles.allLabel}`}
            >
              ورقة حصر ارث:{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile0"
              required
              onChange={handleLimit}
              name="limit"
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile3"
              className={`form-label ${styles.allLabel}`}
            >
              كوشان الارض
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile3"
              required
              onChange={handleKushan}
              name="kushan"
            />
          </div>
          <div>
            <label
              htmlFor="formFile4"
              className={`form-label ${styles.allLabel}`}
            >
              براءة ذمة من البلدية
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile4"
              required
              onChange={handleMunicipal}
              name="municipal"
            />
          </div>
          <div>
            <label
              htmlFor="formFile5"
              className={`form-label ${styles.allLabel}`}
            >
              براءة ذمة مالية
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile5"
              required
              onChange={handleMoney}
              name="money"
            />
          </div>
          <div>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              صورة هوية الورثة
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              onChange={handleImageInhert}
              accept=".pdf"
              name="imagesOfInhert"
            />
          </div>
          <div className={`${styles.allLabel}`}>
            <label
              htmlFor="formFile7"
              className={`form-label text-warning ${styles.allLabel}`}
            >
              {" "}
              اذا كان هناك ورثة خارج فلسطين اضف تصديقات حصر الارث من الخارجية{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile7"
              onChange={handleOuter}
              accept=".pdf"
              name="outer"
            />
          </div>
          <button
            type="submit"
            className={`btn btn-success ${styles.send}`}
            disabled={isLoading ||isSuccess}
          >
            ارسال الملفات
          </button>
        </form>
      </div>
    </>
  );
}
export default Inheretance;
