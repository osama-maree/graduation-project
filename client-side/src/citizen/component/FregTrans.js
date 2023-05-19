import Swal from "sweetalert2";
import { useGetLandFragmentQuery } from "../../services/taboJsonApi.js";
import { Link } from "react-router-dom";

function FregTrans() {
  const { data, isLoading } = useGetLandFragmentQuery();

  const Masseges = (e) => {
    Swal.fire({
      title: `${e.target.value}`,
    });
  };
  return (
    <tbody>
      {isLoading ? (
        <tr></tr>
      ) : (
        data.transaction.map((e, inx) => (
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
                <Link to={`/user/frag/${e._id}`} className="text-white ">
                  عرض
                </Link>
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
export default FregTrans;
