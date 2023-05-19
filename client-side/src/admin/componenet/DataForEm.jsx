import { useEffect } from "react";
import { useGiveVacationMutation } from "../../services/taboJsonApi.js";
import Swal from "sweetalert2";

function DataForEm(props) {
  const [giveVacation, { isLoading, isSuccess, isError }] =
    useGiveVacationMutation();
  function setData() {
    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        giveVacation({ _id: props?.value._id, type: "type1" });
      }
    });
  }
  function setData1() {
    Swal.fire({
      title: `للارسال اضغط موافق`,
      icon: "question",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        giveVacation({ _id: props?.value._id, type: "type2" });
      }
    });
  }
  useEffect(() => {
    // console.log(isError);
    function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    if (isSuccess) {
      Swal.fire({
        toast: true,
        icon: "success",
        text: "تمت العملية بنجاح",
        animation: false,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 3000,
      });

      wait(2000) // Wait for 2 seconds
        .then(() => {
          window.location.reload();
        });
    } else if (isError) {
      Swal.fire({
        toast: true,
        icon: "error",
        text: "تعذرت العملية",
        animation: false,
        showConfirmButton: false,
        timer: 3000,
        position: "bottom-right",
      });

      wait(2000) // Wait for 2 seconds
        .then(() => {
          window.location.reload();
        });
    }

    // console.log(data);
  }, [isSuccess, isError]);
  //  console.log(props.value)
  return (
    <div className="pb-5">
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item list-group-item-action active">
          <h3 className="text-center">تفاصيل الموظف </h3>
        </li>
        <li className="list-group-item d-flex  gap-2 py-3 list-group-item-action ">
          <div className="text-primary h5">رقم الهوية : </div>
          <div className=" text-center h5 text-secondary">
            {props?.value.id}
          </div>
        </li>
        <li className="list-group-item py-3  d-flex gap-2 list-group-item-action ">
          <h5 className="text-primary ">الاسم : </h5>
          <h5 className="text-center text-secondary">{props?.value.fullName}</h5>
        </li>
        <li className="list-group-item py-3 d-flex gap-2 list-group-item-action ">
          <h4 className="text-primary "> البريد الالكتروني : </h4>
          <h5 className="text-center text-secondary">{props.value?.email}</h5>
        </li>
        <li className="list-group-item py-3 d-flex gap-2 list-group-item-action ">
          <h4 className="text-primary ">الحالة :</h4>
          <div className="text-center text-secondary">
            <h5>
              {props.value.freez === false
                ? "غير مجاز"
                : props?.value.freez === null
                ? "----"
                : "مجاز"}
            </h5>
          </div>
        </li>

        {props?.value.freez === true && (
          <li className="list-group-item ">
            <div className="text-center">
              <button
                className="btn btn-primary h6 pb-1 mr-10"
                onClick={() => setData()}
                disabled={isLoading}
              >
                ايقاف الاجازة
              </button>
            </div>
          </li>
        )}
        {props?.value.freez === false && (
          <li className="list-group-item ">
            <div className="text-center">
              <button
                disabled={isLoading}
                className="btn btn-primary h6 pb-1"
                onClick={() => setData1()}
              >
                اعطاء اجازة
              </button>
            </div>
          </li>
        )}
      </div>
    </div>
  );
}

export default DataForEm;
