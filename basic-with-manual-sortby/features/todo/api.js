import qs from "qs";
import axios from "axios";

export async function fetchTodoList(
  page,
  per_page = 10,
  filters = {},
  sortBy = []
) {
  const params = { page, per_page };
  if (filters) {
    let filterString = "";
    if (filters.userId) {
      filterString += `userId:${filters.userId}`;
    }
    if (filterString) {
      params.filters = filterString;
    }
  }
  if (sortBy.length > 0) {
    params.sort = `${sortBy[0].id}:${sortBy[0].desc ? "desc" : "asc"}`;
  }
  const queryString = qs.stringify(params);
  return await axios.get(`/api/todos?${queryString}`);
}
