import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { saveAs } from "file-saver";

function DetailsAreaDep(props) {
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (value, url) => {
    const ext = value.substring(value.lastIndexOf(".") + 1);
    if (ext === "pdf") {
      const pdfPath = url;
      const pdfName = "file.pdf";
      saveAs(pdfPath, pdfName);
    } else {
      setImage(url);
      setShow(true);
    }
  };
  return (
    <div className="pb-5">
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item list-group-item-action active">
          <h3 className="text-center"> تفاصيل الأرض </h3>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> المحافظة </h4>
          <h5 className="text-center text-success">
            {props.value.Governorate}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> القرية </h4>
          <h5 className="text-center text-success">{props.value.village}</h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> رقم الحوض </h4>
          <h5 className="text-center text-success">
            {props.value.pelvis_number}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> رقم الأرض </h4>
          <h5 className="text-center text-success">
            {props.value.land_number}
          </h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> مخطط الأرض :</h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(`../../../../server-side/upload/${props.value.area_chart}`,
                  require(`../../../../server-side/upload/${props.value.area_chart}`)
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
          <Modal.Title>مخطط الموقع</Modal.Title>
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

export default DetailsAreaDep;
