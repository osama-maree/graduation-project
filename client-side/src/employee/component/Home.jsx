import React from "react";
import Declar from "./Declar.jsx";
import SideNav from "./SideNav.jsx";
import "./../style/home.css";
import { useGetLastNewsQuery } from "../../services/taboJsonApi.js";
import Loading from "../../Laoding.jsx";
export const Home = () => {
  const { data, isLoading } = useGetLastNewsQuery();
  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 px-0 style">
          <SideNav />
        </div>

        <div className="col-md-8 addimg ">
          <Declar news={data?.text} />
        </div>
      </div>
    </div>
  );
};
