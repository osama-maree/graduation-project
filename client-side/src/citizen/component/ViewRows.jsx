import Dict from "../../services/dummyData.js";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const ViewRows = (props) => {
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const [Name, setName] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (value, url, name) => {
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
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
 // console.log(props?.moveState);
  return (
    <>
      {props.trans
        ? props.trans.map((e, ind) =>
            ind === props.trans.length - 1 ? (
              <tr key={ind} className="odd text-center">
                <th scope="row">{ind + 1}</th>
                <td> {Dict[e.name]}</td>
                <td colSpan="2">
                  {new Date(e.value).toLocaleDateString(undefined, options)}
                </td>
              </tr>
            ) : (
              <tr key={ind} className="odd text-center">
                <th scope="row">{ind + 1}</th>
                <td> {Dict[e.name]}</td>

                <td>
                  <button
                    className=" btn btn-primary  "
                    // variant="primary"
                    onClick={() =>
                      handleShow(
                        `../../../../server-side/upload/${e.value}`,
                        require(`../../../../server-side/upload/${e.value}`),
                        Dict[e.name]
                      )
                    }
                  >
                    عرض
                  </button>
                </td>
                {props?.moveState === "جاري المعالجة" && (
                  <td>
                    <Link
                      to={`/user/${props.type}/${e.name}/${props.id}/${e.value}`}
                      className=" border btn btn-warning"
                    >
                      تعديل
                    </Link>
                  </td>
                )}
              </tr>
            )
          )
        : "Loading...."}

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
    </>
  );
};

export default ViewRows;
