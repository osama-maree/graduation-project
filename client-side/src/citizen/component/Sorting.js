import styles from "./../style/Sales.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-bootstrap";

function Sorting() {
  const [titleDeed, setTitleDeed] = useState(); //سند ملكية
  const [separeterImage, setSepareterImage] = useState(); //هويات المتفارزين
  const [sitePlan, setSitePlan] = useState(); //مخطط موقع
  const [areaChart, setAreaChart] = useState(); //مخطط مساحة
  const [municipal, setMunicipal] = useState(); //براءة بلدية
  const [money, setMoney] = useState(); //براءة مالية
  const [transReport, setTransReport] = useState(); //تقرير معاملة
  const [detectReport, setDetectReport] = useState(); //تقرير كشف
  const [changeState, setChangeState] = useState(); //بيان تغيير
  const [court, setCourt] = useState({}); //قرار محكمة
  const [doBook, setDoBook] = useState({}); //كتاب مأمور التنفيذ
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.auth);

  function handleTitleDeed(event) {
    setTitleDeed(event.target.files[0]);
  }

  function handleSepareterImage(event) {
    setSepareterImage(event.target.files[0]);
  }

  function handleSitePlan(event) {
    setSitePlan(event.target.files[0]);
  }

  function handleAreaChart(event) {
    setAreaChart(event.target.files[0]);
  }

  function handleMunicipal(event) {
    setMunicipal(event.target.files[0]);
  }

  function handleMoney(event) {
    setMoney(event.target.files[0]);
  }

  function handleTransReport(event) {
    setTransReport(event.target.files[0]);
  }

  function handleDetectReport(event) {
    setDetectReport(event.target.files[0]);
  }

  function handleChangeState(event) {
    setChangeState(event.target.files[0]);
  }

  function handleCort(event) {
    setCourt(event.target.files[0]);
  }

  function handleDoBook(event) {
    setDoBook(event.target.files[0]);
  }

  //upload file

  function handleUpload(e) {
    const formData = new FormData();
    formData.append("titleDeed", titleDeed);
    formData.append(`separeterImage`, separeterImage);
    formData.append("sitePlan", sitePlan);
    formData.append("areaChart", areaChart);
    formData.append("money", money);
    formData.append("municipal", municipal);
    formData.append("transReport", transReport);
    formData.append("detectReport", detectReport);
    formData.append("changeState", changeState);
    formData.append("court", court);
    formData.append("doBook", doBook);

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
            "http://localhost:3000/api/v1/tabo/user/create_land_sorting",
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
        <h2 className={`${styles.text} py-4`}>معاملة فرز</h2>
        <form
          onSubmit={handleUpload}
          className={` ${styles.fff} bg-light rounded`}
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
              سند الملكية:{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile0"
              required
              name="titleDeed"
              onChange={handleTitleDeed}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile1"
              className={`form-label ${styles.allLabel}`}
            >
              صور هويات المتفارزين{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile1"
              required
              accept=".pdf"
              name="separeterImage"
              onChange={handleSepareterImage}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile2"
              className={`form-label ${styles.allLabel}`}
            >
              براءة ذمة مالية
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile2"
              required
              name="money"
              onChange={handleMoney}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile3"
              className={`form-label ${styles.allLabel}`}
            >
              براءة ذمة من البلدية
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile3"
              required
              name="municipal"
              onChange={handleMunicipal}
            />
          </div>
          <div>
            <label
              htmlFor="formFile4"
              className={`form-label ${styles.allLabel}`}
            >
              مخطط موقع القطعة
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile4"
              required
              name="sitePlan"
              onChange={handleSitePlan}
            />
          </div>
          <div>
            <label
              htmlFor="formFile5"
              className={`form-label ${styles.allLabel}`}
            >
              مخطط مساحة
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile5"
              required
              name="areaChart"
              onChange={handleAreaChart}
            />
          </div>
          <div>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              تقرير معاملة
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              name="transReport"
              onChange={handleTransReport}
            />
          </div>
          <div>
            <label
              htmlFor="formFile7"
              className={`form-label ${styles.allLabel}`}
            >
              تقرير كشف
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile7"
              required
              name="detectReport"
              onChange={handleDetectReport}
            />
          </div>
          <div>
            <label
              htmlFor="formFile8"
              className={`form-label ${styles.allLabel}`}
            >
              بيان تغيير
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile8"
              required
              name="changeState"
              onChange={handleChangeState}
            />
          </div>
          <p className={`text-warning ${styles.p}`}>
            <b>في الحالة القضائية ارفق الملفات التالية</b>
          </p>
          <div>
            <label
              htmlFor="formFile7"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              قرار المحكمة
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile7"
              name="court"
              onChange={handleCort}
            />
          </div>
          <div>
            <label
              htmlFor="formFile8"
              className={`form-label ${styles.allLabel}`}
            >
              {" "}
              كتاب مأمور التنفيذ{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile8"
              name="doBook"
              onChange={handleDoBook}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-success ${styles.send}`}
            disabled={isLoading || isSuccess}
          >
            ارسال الملفات
          </button>
        </form>
      </div>
    </>
  );
}
export default Sorting;
