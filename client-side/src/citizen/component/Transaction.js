import { useState } from "react";
import styles from "./../style/inquiry.module.css";
import { Button, ButtonGroup } from "react-bootstrap";
import SaleTrans from "./SaleTrans";
import InhertTrans from "./InhertTrans";
import SortTrans from "./SortTrans";
import MortTrans from "./MortTrans";
import FregTrans from "./FregTrans";

function Transaction() {
  let [name, setName] = useState("بيع");

  const trans = (e) => {
    setName(e.target.value);
  };

  const getTransactions = () => {
    if (name === "بيع") {
      return <SaleTrans />;
    } else if (name === "حصر ارث") {
      return <InhertTrans />;
    } else if (name === "فرز") {
      return <SortTrans />;
    } else if (name === "رهن") {
      return <MortTrans />;
    } else if (name === "تجزئة") {
      return <FregTrans />;
    }
  };

  return (
    <>
      <div className={`container-fluid text-light py-3  ${styles.Mains}`}>
        <form className=" text-light py-3">
          <ButtonGroup aria-label="" className={`${styles.buttons}`}>
            <Button
              variant="secondary"
              className={`btn btn-success`}
              value="بيع"
              onClick={trans}
            >
              معاملات البيع
            </Button>
            <Button
              variant="secondary"
              className={`btn btn-success`}
              value="رهن"
              onClick={trans}
            >
              معاملات الرهن
            </Button>
            <Button
              variant="secondary"
              className={`btn btn-success`}
              value="فرز"
              onClick={trans}
            >
              معاملات الفرز
            </Button>
            <Button
              variant="secondary"
              className={`btn btn-success`}
              value="تجزئة"
              onClick={trans}
            >
              معاملات التجزئة
            </Button>
            <Button
              variant="secondary"
              className={`btn btn-success`}
              value="حصر ارث"
              onClick={trans}
            >
              معاملات نقل الارث
            </Button>
          </ButtonGroup>
        </form>
        <div className={styles.tabel}>
          <h2 className={styles.title}> معاملات ال{name}</h2>
          <table className={`table table-dark table-striped ${styles.ff}`}>
            <thead className={styles.ff}>
              <tr>
                <th scope="col">#</th>
                <th scope="col">رقم المعاملة</th>
                <th scope="col">نوع المعاملة</th>
                <th scope="col">حالة المعاملة</th>
                <th scope="col">المزيد</th>
              </tr>
            </thead>
            {getTransactions()}
          </table>
        </div>
      </div>
    </>
  );
}
export default Transaction;
