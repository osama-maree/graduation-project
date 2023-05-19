import axios from "axios";
import styles from "./../style/Sales.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
function Mortgage() {
  const [titleDeed, setTitleDeed] = useState(); //سند ملكية
  const [userID, setUserID] = useState(); //هوية المالك
  const [nextID, setNextID] = useState(); //هوية الطرف الاخر
  const [legal, setLegal] = useState(); // اقرار عدلي
  const [insurance, setInsurance] = useState(); // سندات تامين
  const [book, setBook] = useState(); //كتاب تفويض
  const [reqest, setRequest] = useState(); // طلب تأمين
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.auth);

  // handle data in state

  function handleTitleDeed(event) {
    setTitleDeed(event.target.files[0]);
  }

  function handleUserID(event) {
    setUserID(event.target.files[0]);
  }

  function handleNextID(event) {
    setNextID(event.target.files[0]);
  }

  function handleLegal(event) {
    setLegal(event.target.files[0]);
  }

  function handleInsurance(event) {
    setInsurance(event.target.files[0]);
  }

  function handleBook(event) {
    setBook(event.target.files[0]);
  }

  function handleRequest(event) {
    setRequest(event.target.files[0]);
  }

  //upload file

  function handleUpload(e) {
    const formData = new FormData();
    formData.append("titleDeed", titleDeed);
    formData.append("userID", userID);
    formData.append("nextID", nextID);
    formData.append("legal", legal);
    formData.append(`insurance`, insurance);
    formData.append("book", book);
    formData.append("request", reqest);

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
            "http://localhost:3000/api/v1/tabo/user/create_land_Mortgaga",
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
        <h2 className={`${styles.text} py-4`}>معاملة رهن</h2>
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
              {" "}
              سند ملكية{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile0"
              required
              onChange={handleTitleDeed}
              name="titleDeed"
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile3"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              صورة هوية المالك
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile3"
              required
              name="userID"
              onChange={handleUserID}
            />
          </div>
          <div>
            <label
              htmlFor="formFile4"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              صورة هوية الطرف الاخر{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile4"
              required
              name="nextID"
              onChange={handleNextID}
            />
          </div>
          <div>
            <label
              htmlFor="formFile5"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              اقرار عدلي{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile5"
              required
              name="legal"
              onChange={handleLegal}
            />
          </div>
          <div>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              سندات تامين{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              accept=".pdf"
              name="insurance"
              onChange={handleInsurance}
            />
          </div>
          <div className={`${styles.allLabel}`}>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              كتاب تفويض{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              name="book"
              onChange={handleBook}
            />
          </div>
          <div className={`${styles.allLabel}`}>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              طلب تامين{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              name="reqest"
              onChange={handleRequest}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-success ${styles.send}`}
            disabled={isLoading||isSuccess}
          >
            ارسال الملفات
          </button>
        </form>
      </div>
    </>
  );
}

export default Mortgage;
