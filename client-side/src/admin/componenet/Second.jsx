import { useState } from "react";
import { useGetMunicipalQuery } from "../../services/taboJsonApi.js";
import { Button, Modal } from "react-bootstrap";

function Second() {
  const [show, setShow] = useState(false);
  const [Image, setImage] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setImage(url);
    setShow(true);
  };

  let [id, setValue] = useState();
  const { data, refetch } = useGetMunicipalQuery({ id });
  // let [data, setData] = useState(trying);

  function takeData() {
    refetch();
  }

  return (
    <>
      <div className="t container-fluid">
        <div>
          <h2 className="text-center py-4 text-dark">البلدية</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text bg-primary"
                    id="inputGroup-sizing-default"
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        takeData();
                      }}
                    >
                      بحث
                    </button>
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="ادخل رقم الهوية"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="pb-5">
                <div className="list-group" id="list-tab" role="tablist">
                  <li className="list-group-item list-group-item-action active">
                    <h3 className="text-center">تفاصيل براءة الذمة</h3>
                  </li>
                  <li className="list-group-item list-group-item-action ">
                    <h4 className="text-primary ">رقم الهوية : </h4>
                    <h5 className="text-center text-success">{data?.id}</h5>
                  </li>

                  <li className="list-group-item list-group-item-action ">
                    <h4 className="text-primary ">صورة :</h4>
                    <div className="text-center">
                      <button
                        className="btn btn-success h6 pb-1"
                        onClick={() =>
                          handleShow(
                            require(`../../../../server-side/upload/${data?.municipal_clearance}`)
                          )
                        }
                      >
                        عرض
                      </button>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="d-flex justify-content-center">
            <Modal.Title>براءة ذمة بلدية</Modal.Title>
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
    </>
  );
}

export default Second;
