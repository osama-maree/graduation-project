import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DetailsOter(props) {
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setImage(url);
    setShow(true);
  };

  return (
    <div>
      <div className="list-group" id="list-tab" role="tablist">
        <li className="list-group-item list-group-item-action active">
          <h3 className="text-center">وثائق من وزارة الخارجية </h3>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">رقم الوثيقة : </h4>
          <h5 className="text-center text-success">{props?.value?.id}</h5>
        </li>
        <li className="list-group-item list-group-item-action ">
          <h4 className="text-primary ">وثيقة لحصر الارث</h4>
          <div className="text-center">
            <button
              className="btn btn-success h6 pb-1"
              onClick={() =>
                handleShow(
                  require(`../../../../server-side/upload/${props?.value?.photo}`)
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
          <Modal.Title>وثيقة حصر ارث</Modal.Title>
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

export default DetailsOter;
