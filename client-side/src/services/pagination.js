import _ from "lodash";

const pagination = (users, pageNumber, pageSize) => {
  const startIndex = pageNumber * pageSize;
  return _(users).slice(startIndex).take(pageSize).value();
};
export default pagination;
