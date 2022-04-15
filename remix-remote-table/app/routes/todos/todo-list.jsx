import { useRoutePagination } from "../../features/remote-table/hooks/use-route-pagination";
import TodoListWithSearchForm from "../../features/todo/components/TodoListWithSearchForm";

import React from "react";

const TodoListPage = () => {
  const {
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
    filters,
    setFilters,
    sortBy,
    setSortBy,
  } = useRoutePagination();

  return (
    <>
      <div>
        <h1 className="text-2xl pb-2 border-b">TodoList</h1>
      </div>
      <div>
        <TodoListWithSearchForm
          controlledPageIndex={pageIndex}
          controlledPageSize={pageSize}
          controlledFilters={filters}
          controlledSortBy={sortBy}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
          setFilters={setFilters}
          setSortBy={setSortBy}
        />
      </div>
    </>
  );
};

export default TodoListPage;
