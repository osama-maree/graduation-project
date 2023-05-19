import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./login/Login.jsx";
import {
  getDataFail,
  getDataPending,
  getDataSuccess,
} from "./features/dataSlice/dataslice.js";
import { ForgotPassword } from "./citizen/component/ForgotPassword.jsx";
import { EnterCode } from "./citizen/component/EnterCode.jsx";
import { UpdatedPassword } from "./citizen/component/UpdatedPassword.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Protect } from "./citizen/component/Protect.jsx";
import NavForCitiz from "./citizen/component/NavForCitiz.js";
import SideBar from "./citizen/component/SideBar.js";
import Sale from "./citizen/component/Sale.js";
import Sorting from "./citizen/component/Sorting.js";
import Fregmantation from "./citizen/component/Fregmantation.js";
import InhertTrans from "./citizen/component/InhertTrans.js";
import Mortgage from "./citizen/component/Mortgage.js";
import Transaction from "./citizen/component/Transaction.js";
import Land from "./citizen/component/Land.js";
import TransAction from "./citizen/component/TransAction.jsx";
import UpdateAttributes from "./citizen/component/UpdateAttributes.jsx";
import { Home } from "./employee/component/Home.jsx";
import NavBar from "./employee/component/NavBar.jsx";
import ViewTrans from "./employee/component/ViewTrans.jsx";
import ViewSaleTrans from "./employee/component/ViewSaleTrans.jsx";
import Signup from "./employee/component/Signup.jsx";
import NavForAdmin from "./admin/componenet/NavForAdmin.jsx";
import AdminHome from "./admin/componenet/AdminHome.jsx";
import SignUp from "./admin/componenet/SignUp.jsx";
import Works from "./admin/componenet/Works.jsx";
import View from "./admin/componenet/View.jsx";
import Vacation from "./admin/componenet/Vacation.jsx";
import CheckLinks from "./admin/componenet/CheckLinks.jsx";
import Interior from "./admin/componenet/Interior.jsx";
import Outer from "./admin/componenet/Outer.jsx";
import LimitingLegacy from "./admin/componenet/LimitingLegacy.jsx";
import Municipality from "./admin/componenet/Municipality.jsx";
import Tax from "./admin/componenet/Tax.jsx";
import AreaDep from "./admin/componenet/AreaDep.jsx";
import Second from "./admin/componenet/Second.jsx";
import Inheretance from "./citizen/component/Inheretance.js";
import AddNews from "./admin/componenet/AddNews.jsx";
import AddModal from "./admin/componenet/AddModal.jsx";
import PageNotFound from "./pageNotfound/PageNotFound.jsx";
import AddLand from "./employee/component/AddLand.jsx";
import FreezLand from "./employee/component/FreezLand.jsx";
function App() {
  const { role } = useSelector((state) => state.data);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    const getData = async () => {
      try {
        dispatch(getDataPending());
        const res = await axios.get(
          "http://localhost:3000/api/v1/tabo/getdata",
          {
            headers: {
              token: `osama__${token}`,
            },
          }
        );
        if (res.status === 200) {
          dispatch(getDataSuccess(res.data));
        } else {
          dispatch(getDataFail());
        }
      } catch (err) {
        dispatch(getDataFail());
      }
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="forgotPassword/enterCode" element={<EnterCode />}></Route>
        <Route
          path="forgotPassword/enterCode/updatedpassword"
          element={<UpdatedPassword />}
        />
        {/* المواطن */}
        <Route element={<Protect role={"user"} />}>
          <Route
            path="/"
            element={
              <>
                <NavForCitiz />
                <SideBar />
              </>
            }
          ></Route>
          <Route
            path="sale"
            element={
              <>
                <NavForCitiz />
                <Sale />
              </>
            }
          ></Route>
          <Route
            path="sorting"
            element={
              <>
                <NavForCitiz />
                <Sorting />
              </>
            }
          />
          <Route
            path="fregmantation"
            element={
              <>
                <NavForCitiz />
                <Fregmantation />
              </>
            }
          />
          <Route
            path="inheretance"
            element={
              <>
                <NavForCitiz />
                <Inheretance />
              </>
            }
          />
          <Route
            path="mortgage"
            element={
              <>
                <NavForCitiz />
                <Mortgage />
              </>
            }
          />
          <Route
            path="transaction"
            element={
              <>
                <NavForCitiz />
                <Transaction />
              </>
            }
          />
          <Route
            path="land"
            element={
              <>
                <NavForCitiz />
                <Land />
              </>
            }
          />
          <Route
            path="user/:type/:id"
            element={
              <>
                {" "}
                <NavForCitiz />
                <TransAction />
              </>
            }
          />
          <Route
            path="user/:type/:name/:id/:value"
            element={
              <>
                <NavForCitiz /> <UpdateAttributes />
              </>
            }
          />
        </Route>

        {/* نهاية المواطن */}
        {/* تسجيل الدخول */}

        {/* employee */}
        <Route element={<Protect role={"employee"} />}>
          <Route
            path="homeEmployee"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          />
          <Route path="employee/:type/:subtype/:id" element={<ViewTrans />} />
          <Route path="emp/:type/:title/:id" element={<ViewSaleTrans />} />
          <Route
            path="employee/createaccount"
            element={
              <>
                <NavBar />
                <Signup />
              </>
            }
          />

          <Route
            path="addland"
            element={
              <>
                <NavBar />
                <AddLand />
              </>
            }
          />
          <Route
            path="freezland"
            element={
              <>
                <NavBar />
                <FreezLand />
              </>
            }
          />
        </Route>
        {/* الادمن */}
        {/* <Route path="admin" element={<NavForAdmin />} />
        <Route path="admin" element={
          <>
            <NavForAdmin />
            <SidebarForAdmin />
          </>
        } /> */}
        <Route element={<Protect role={"manager"} />}>
          <Route
            path="admin"
            element={
              <>
                <NavForAdmin />
                <AdminHome />
              </>
            }
          />
          <Route
            path="addnews"
            element={
              <>
                <NavForAdmin />
                <AddNews />
              </>
            }
          />
          <Route
            path="addModal"
            element={
              <>
                <NavForAdmin />
                <AddModal />
              </>
            }
          />
          <Route path="newAccount" element={<SignUp />} />
          <Route path="working/:type/:id" element={<Works />} />
          <Route path="view" element={<View />} />
          <Route path="vacation" element={<Vacation />} />
          <Route path="checklinks" element={<CheckLinks />} />

          {/* نهاية الادمن  */}
        </Route>

        <Route element={<Protect role={"manager employee"} />}>
          <Route
            path={role + "/internal"}
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <Interior />
              </>
            }
          />
          <Route
            path={role + "/outer"}
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <Outer />
              </>
            }
          />
          <Route
            path={role + "/tax"}
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <Tax />
              </>
            }
          />
          <Route
            path={role + "/sharia"}
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <LimitingLegacy />
              </>
            }
          />
          <Route
            path={role + "/area"}
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <AreaDep />
              </>
            }
          />
          <Route
            path="land/municipality"
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <Municipality />
              </>
            }
          />
          <Route
            path="second/muni"
            element={
              <>
                {role === "employee" ? <NavBar /> : <NavForAdmin />}
                <Second />
              </>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
