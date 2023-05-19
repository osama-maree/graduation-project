import React, { useRef, useState } from "react";
// import NavForAdmin from "../homePage/NavForAdmin.js";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import axios from "axios";
// import sound from '../../../public/assets/sound.mp3'
import check from "./../style/check.module.css";
import { Alert } from "react-bootstrap";
// import SoundPlayer from "./SoundPlayer.js";
const CheckLinks = () => {
  const [isLoad, setLoad] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);

  const [URL, setUrl] = useState();
  const [suc, setSuc] = useState(false);
  const [falled, setFalled] = useState(false);

  const playSound = async () => {
    setLoad(true);
    let formData = new FormData();
    formData.append("URL", URL);
    const res = await axios.post(
      "http://ahmadsaleh.pythonanywhere.com/classify/",
      formData,
      {
        headers: {
          ContentType: "multipart/form-data",
        },
      }
    );
    console.log(res);
    if (res?.data?.Good === "0") {
      setFalled(true);
      audioRef.current.play();
    }
    if (res?.data?.Good === "1") {
      setSuc(true);
      audioRef2.current.play();
    }

    // console.log("ddddd");
    setLoad(false);
  };

  // audioRef.current.play()
  return (
    <>
      {/* <NavForAdmin /> */}
      <div className={`container-fluid   ${check.testOsama}`}>
        <div className="container   vh-100 d-flex   align-items-center justify-content-center flex-column">
          <h1 className=" my-5 p-3 rounded text-white ">Welcome to AI</h1>
          <div
            className={
              falled
                ? "border rounded p-3 danger-osama"
                : suc
                ? "border rounded p-3 alert alert-success"
                : "border rounded p-3 "
            }
          >
            {suc && <Alert variant="success text-center">رابط صالح</Alert>}
            {falled && (
              <Alert variant="danger text-center">رابط غير صالح</Alert>
            )}
            <input
              type="text"
              className="form-control my-2"
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-primary"
                onClick={playSound}
                disabled={!URL || isLoad}
              >
                فحص{" "}
              </button>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                رجوع
              </button>
            </div>
          </div>
          <button
            className="btn btn-primary mt-5"
            onClick={() => {
              window.location.reload();
            }}
          >
            ايقاف
          </button>
        </div>
      </div>
      <audio ref={audioRef2}>
        <source src="/assets/soud2.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={audioRef} loop>
        <source src="/assets/sound.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default CheckLinks;
