// import styles from "./Main.module.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";

import { News } from "./../component/News.jsx";
import "./../style/privatestyle.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  useGetLastNewsQuery,
  useGetModalQuery,
  useUseLoginQuery,
} from "../../services/taboJsonApi.js";
import Laoding from "../../Laoding.jsx";
import Bottom from "./Bottom.js";
function SideBar() {
  const [date, setDate] = useState(new Date());
  const { data, isLoading } = useUseLoginQuery();
  const { data: data1, isLoading: isLoading2 } = useGetLastNewsQuery();
  const { data: data2, isLoading: isLoading3 } = useGetModalQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading || isLoading2 || isLoading3) return <Laoding />;
  const date1 = new Date(data?.birthDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <>
      <div className="d-flex justify-content-between sty mx-4 mt-3">
        <h6 className="text-secondary">
          الصفحة الرئيسية <AiOutlineHome className="me-2" />
        </h6>
        <p className="h6">{date.toLocaleString()}</p>
      </div>
      <div className="container-fluid mt-1  mb-4">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pb-5 mt-5 text-center">المعلومات الشخصية</h2>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-4 m-0">
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5"> الاسم </span>
                  </h6>

                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5">الايميل</span>
                  </h6>

                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5"> رقم الهاتف </span>
                  </h6>

                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5"> العنوان </span>
                  </h6>
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5"> تاريخ الميلاد </span>
                  </h6>
                </div>
                <div className="col-md-8 m-0">
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5">{data?.fullName}</span>
                  </h6>
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5">{data?.email}</span>
                  </h6>
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="me-5">{data?.phoneNumber}</span>
                  </h6>
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="me-5">{data?.address}</span>
                  </h6>
                  <h6 className="mb-4 pb-2 mb-h6">
                    <span className="mx-5">
                      {date1.toLocaleString("ar-EG", options)}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <MDBCarousel showIndicators showControls fade>
              {data2.map((item, indx) => (
                <MDBCarouselItem
                  className="w-100"
                  style={{ height: "25rem" }}
                  itemId={indx + 1}
                  src={item?.ImgUrl}
                  alt="..."
                  key={indx}
                >
                  
                  <h5>{item?.title}</h5>
                  <p>{item?.text}</p>
                </MDBCarouselItem>
              ))}
            </MDBCarousel>
          </div>
        </div>
      </div>
      <News news={data1?.text} />
      <Bottom />
    </>
  );
}
export default SideBar;
