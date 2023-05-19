import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DetailsInterior(props) {
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setImage(url);
    setShow(true);
  };
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="pb-5">
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item list-group-item-action active">
          <h3 className="text-center">تفاصيل الهوية </h3>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">رقم الهوية : </h4>
          <h5 className="text-center text-success">{props?.value[0]?.id}</h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">الاسم : </h4>
          <h5 className="text-center text-success">{props?.value[0]?.name}</h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">تاريخ الميلاد : </h4>
          <h5 className="text-center text-success">
            {new Date(props.value[0].Date_of_Birth).toLocaleDateString(
              undefined,
              options
            )}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">مكان الميلاد : </h4>
          <h5 className="text-center text-success">
            {props?.value[0]?.place_of_birth}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> اسم الام: </h4>
          <h5 className="text-center text-success">
            {props?.value[0]?.Mather_name}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">صورة :</h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(
                  require(`../../../../server-side/upload/${props.value[0].photo}`)
                )
              }
            >
              عرض
            </button>
          </div>
        </li>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title>الصورة الشخصية</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={Image}
            width="100%"
            height="100%"
            className="img-fluid"
            alt=""
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsInterior;
