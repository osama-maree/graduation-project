import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { saveAs } from "file-saver";

function DescLand(props) {
  // console.log(props.value);
  const [Name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (value, url, name) => {
    setName(name);
    const ext = value.substring(value.lastIndexOf(".") + 1);
    if (ext === "pdf") {
      const pdfPath = url;
      const pdfName = "file.pdf";
      saveAs(pdfPath, pdfName);
    } else {
      setName(name);
      setImage(url);
      setShow(true);
    }

    //path.substring(path.lastIndexOf(".") + 1);
  };
  //path.substring(path.lastIndexOf(".") + 1);

  // console.log(props.value);
  return (
    <div className="pb-5">
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item list-group-item-action active">
          <h3 className="text-center"> تفاصيل عامة </h3>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary py-2 ">رقم الهوية : </h4>
          <h5 className="text-center text-success">
            {props?.value?.userId?.id}
          </h5>
        </li>

        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> مخطط الموقع </h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(
                  `../../../../server-side/upload/${props?.value?.site_plan}`,
                  require(`../../../../server-side/upload/${props?.value?.site_plan}`),
                  "مخطط الموقع"
                )
              }
            >
              عرض
            </button>
          </div>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary "> وصف الأرض </h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(
                  `../../../../server-side/upload/${props?.value?.land_desc}`,
                  require(`../../../../server-side/upload/${props?.value?.land_desc}`),
                  "وصف الارض"
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
          <Modal.Title>{Name}</Modal.Title>
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

export default DescLand;
