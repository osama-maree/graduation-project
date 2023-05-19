import styles from "./../style/Sales.module.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert } from "react-bootstrap";
function Fregmantation() {
  //first write state to each input file
  const [titleDeed, setTitleDeed] = useState(); //سند ملكية
  const [separeterImage, setSepareterImage] = useState(); //هويات المتفارزين
  const [sitePlan, setSitePlan] = useState(); //مخطط موقع
  const [areaChart, setAreaChart] = useState(); //مخطط مساحة
  const [municipal, setMunicipal] = useState(); //براءة بلدية
  const [money, setMoney] = useState(); //براءة مالية
  const [transReport, setTransReport] = useState(); //تقرير معاملة
  const [detectReport, setDetectReport] = useState(); //تقرير كشف
  const [changeState, setChangeState] = useState(); //بيان تغيير
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titleDeed", titleDeed);
    formData.append(`separeterImage`, separeterImage);
    formData.append("sitePlan", sitePlan);
    formData.append("areaChart", areaChart);
    formData.append("municipal", municipal);
    formData.append("money", money);
    formData.append("transReport", transReport);
    formData.append("detectReport", detectReport);
    formData.append("changeState", changeState);
    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        setIsLoading(true);
        try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/tabo/user/create_land_fragmentation",
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
  };

  return (
    <>
      <div
        className={`container-fluid bg-success text-light py-3 ${styles.Main}`}
      >
        <h2 className={`${styles.text} py-4`}>معاملة تجزئة</h2>
        <form
          onSubmit={handleUpload}
          className={`${styles.fff} bg-light rounded`}
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
              onChange={(e) => setTitleDeed(e.target.files[0])}
              name="titleDeed"
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile1"
              className={`form-label ${styles.allLabel}`}
            >
              صور هويات الاشخاص المطلوبين{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile1"
              required
              accept=".pdf"
              onChange={(e) => setSepareterImage(e.target.files[0])}
              name="separeterImage"
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
              onChange={(e) => setMoney(e.target.files[0])}
              name="money"
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
              onChange={(e) => setMunicipal(e.target.files[0])}
              name="municipal"
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
              onChange={(e) => setSitePlan(e.target.files[0])}
              name="sitePlan"
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
              onChange={(e) => setAreaChart(e.target.files[0])}
              name="areaChart"
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
              onChange={(e) => setTransReport(e.target.files[0])}
              name="transReport"
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
              onChange={(e) => setDetectReport(e.target.files[0])}
              name="detectReport"
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
              onChange={(e) => setChangeState(e.target.files[0])}
              name="changeState"
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
export default Fregmantation;
