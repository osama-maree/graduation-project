import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetSaleTranactionQuery } from "../../services/taboJsonApi.js";
import './../style/transaction.css'
function SaleTrans() {
  const { data, isLoading } = useGetSaleTranactionQuery();
 
  const Masseges = (e) => {
    Swal.fire({
      title: `${e.target.value}`,
    })
  }
  return (
    <tbody>
      {isLoading
        ? <tr></tr>
        : data.transaction.map((e, inx) => (
            <tr key={inx}>
              <th scope="row">{inx + 1}</th>
              <td>{e.id}</td>
              <td>{e.Movement_type}</td>
              <td>
                <button
                  onClick={Masseges}
                  className="btn text-white myhover"
                  value={e.message}
                >
                  {" "}
                  {e.MoveState}
                </button>
              </td>
              <td>
                  <button className="btn btn-primary">
                    <Link to={`/user/sale/${e._id}`} className="text-white ">
                      عرض
                    </Link>
                  </button>
              
              </td>
            </tr>
          ))}
    </tbody>
  );
}
export default SaleTrans;
