import { saveAs } from "file-saver";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useFreezLandMutation } from "../../services/taboJsonApi.js";

function DetailLands(props) {
  const [freezLand, { data, isError, isSuccess }] = useFreezLandMutation();

  const handleShow = (url) => {
    const pdfPath = url;
    const pdfName = "file.pdf";
    saveAs(pdfPath, pdfName);
  };
  const handleFreez = (e) => {
    e.preventDefault();
    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        freezLand(props.value);
      }
    });
  };
  return (
    <div className="pb-5">
      {isSuccess && (
        <Alert variant="success text-center">تمت العملية بنجاح</Alert>
      )}
      {isError && <Alert variant="danger text-center">فشلت العملية</Alert>}
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item  list-group-item-action active">
          <h3 className="text-center"> تفاصيل الأرض</h3>
        </li>
        <li className="list-group-item  py-3 d-flex gap-3 list-group-item-action ">
          <h4 className="text-primary "> المحافظة :</h4>
          <h4 className="text-center text-success">
            {props.value.Governorate_name}
          </h4>
        </li>
        <li className="list-group-item py-3 d-flex gap-3 list-group-item-action ">
          <h4 className="text-primary "> القرية :</h4>
          <h4 className="text-center text-success">
            {props.value.village_name}
          </h4>
        </li>
        <li className="list-group-item py-3 d-flex gap-3 list-group-item-action ">
          <h4 className="text-primary "> رقم الحوض :</h4>
          <h4 className="text-center text-success">{props.value.Pelvis_id}</h4>
        </li>
        <li className="list-group-item  py-3 d-flex gap-3 list-group-item-action ">
          <h4 className="text-primary "> رقم الأرض :</h4>
          <h4 className="text-center text-success">{props.value.Land_id}</h4>
        </li>
        <li className="list-group-item  py-3 d-flex gap-3 list-group-item-action ">
          <h4 className="text-primary "> الحي:</h4>
          <h4 className="text-center text-success">
            {props.value.District_name}
          </h4>
        </li>
        <li className="list-group-item py-3 d-flex gap-5 list-group-item-action ">
          <h4 className="text-primary "> الصحيفة:</h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(
                  require(`../../../../server-side/upload/${props.value.lands}`)
                )
              }
            >
              عرض
            </button>
          </div>
        </li>
        {!props?.value?.freez && (
          <li className="list-group-item  py-3 d-flex gap-3 list-group-item-action ">
            <button className="btn btn-primary" onClick={handleFreez}>
              تجميد
            </button>
          </li>
        )}
      </div>
    </div>
  );
}

export default DetailLands;
