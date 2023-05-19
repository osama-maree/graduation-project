import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import pagination from "../../services/pagination.js";
function TransactionComp({ trans, pageInfo ,type,title}) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

  return (
    <>
      {pagination(trans, pageInfo.pageNumber, pageInfo.pageSize).map(
        (e, ind) => {
          return (
            <tr key={ind} className="odd text-center">
              <th scope="row">
                {1 + ind + pageInfo.pageNumber * pageInfo.pageSize}
              </th>
              <td>{e.id}</td>
              <td>{e.cost}</td>

              <td>{e.Movement_type}</td>
              <td>{e.userId.fullName}</td>
              <td className="drop1">
                {new Date(e.createdAt).toLocaleDateString(undefined, options)}
              </td>
              <td>
                <Link to={`/emp/${type}/${title}/${e._id}`}>
                  <SearchRoundedIcon className="icons" />
                </Link>
              </td>
            </tr>
          );
        }
      )}
    </>
  );
}
export default TransactionComp;
