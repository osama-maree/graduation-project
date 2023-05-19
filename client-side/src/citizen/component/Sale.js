import { useState } from "react";
import Swal from "sweetalert2";
import styles from "./../style/Sales.module.css";
// import { useCreateSaleMutation } from "../../services/taboJsonApi.js";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function Sale() {
  const [kushan, setKushan] = useState();
  const [saler, setSaler] = useState(null);
  const [boughter, setBoghter] = useState();
  const [describ, setDescrib] = useState();
  const [municipal, setMunicipal] = useState();
  const [money, setMoney] = useState();
  const [contract, setContract] = useState();
  // const [createSale, { data, isLoading1 }] = useCreateSaleMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kushan", kushan);
    formData.append("saler", saler);
    formData.append("boughter", boughter);
    formData.append("describe", describ);
    formData.append("municipal", municipal);
    formData.append("mony", money);
    formData.append("contract", contract);
    Swal.fire({
      text: `للارسال اضغط موافق`,
      icon:'question',
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        setIsLoading(true);
        try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/tabo/user/create_land_sale",
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
             Swal.fire({
               text: `تم الانتهاء`,
               icon: "success",
             });
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
      <div className={`container-fluid text-light py-3 ${styles.Main}`}>
        <h2 className={`${styles.text} py-4`}>معاملة بيع</h2>
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
              الكوشان:{" "}
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile0"
              required
              name="kushan"
              onChange={(event) => setKushan(event.target.files[0])}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile1"
              className={`form-label ${styles.allLabel}`}
            >
              صورة هوية البائع/يعن
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile1"
            
              required
              name="saler"
              onChange={(e) => setSaler(e.target.files[0])}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile2"
              className={`form-label ${styles.allLabel}`}
            >
              صورة هوية المشتري/ن بصيغة pdf
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile2"
              required
              name="boughter"
              onChange={(e) => setBoghter(e.target.files[0])}
            />
          </div>
          <div className={`mb-3 ${styles.sDiv}`}>
            <label
              htmlFor="formFile3"
              className={`form-label ${styles.allLabel}`}
            >
              وصف الارض
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile3"
              required
              name="describ"
              onChange={(event) => setDescrib(event.target.files[0])}
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
              name="municipal"
              onChange={(e) => setMunicipal(e.target.files[0])}
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
              name="money"
              onChange={(e) => setMoney(e.target.files[0])}
            />
          </div>
          <div>
            <label
              htmlFor="formFile6"
              className={`form-label ${styles.allLabel}`}
            >
              عقد البيع
            </label>
            <input
              className={`form-control ${styles.allInput}`}
              type="file"
              id="formFile6"
              required
              name="contract"
              onChange={(e) => setContract(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-success ${styles.send}`}
            disabled={isLoading||isSuccess }
          >
            ارسال الملفات
          </button>
        </form>
      </div>
    </>
  );
}
export default Sale;
