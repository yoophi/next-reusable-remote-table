import qs from "qs";
import axios from "axios";

export async function fetchTodoList(page, per_page = 10, filters = {}) {
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
  const queryString = qs.stringify(params);
  return await axios.get(`/api/todos?${queryString}`);
}
