import { saveAs } from "file-saver";
import styles from "./../style/inquiry.module.css";
import { useGetLandQuery } from "../../services/taboJsonApi.js";
import Loading from "./../../Laoding.jsx";

function Land() {
  const { data, isLoading } = useGetLandQuery();
  if (isLoading) {
    return <Loading />;
  }
  const downloadPdf = (url) => {
    const pdfPath = url;
    const pdfName = "land.pdf";
    saveAs(pdfPath, pdfName);
  };

  return (
    <div className={`container-fluid text-light py-3 ${styles.Mains}`}>
      <h2 className={`text-white ${styles.texts}`}>الأراضي المسجلة</h2>
      <div className={styles.tabel}>
        <table className="table table-dark table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">رقم الحوض</th>
              <th scope="col">رقم القطعة</th>
              <th scope="col">اسم البلدة</th>
              <th scope="col">اسم المحافظة</th>
              <th scope="col">الصحيفة</th>
            </tr>
          </thead>

          <tbody className="">
            {data.map((e, indx) => {
              return (
                <tr key={e._id}>
                  <th scope="row">{indx + 1}</th>
                  <td>{e.Pelvis_id}</td>
                  <td>{e.Land_id}</td>
                  <td>{e.village_name}</td>
                  <td>{e.Governorate_name}</td>

                  <td>
                    <button
                      onClick={() =>
                        downloadPdf(
                          require(`../../../../server-side/upload/${e.lands}`)
                        )
                      }
                      className="btn btn-primary"
                    >
                      تنزيل
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Land;
