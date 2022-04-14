import { useRouter } from "next/router";
import React from "react";
import { useRoutePagination } from "../features/remote-table/hooks/use-route-pagination";
import TodoListWithSearchForm from "../features/todo/components/TodoListWithSearchForm";
import Layout from "../layouts";

const TodoListPage = () => {
  const router = useRouter();
  const {
    isReady,
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
    filters,
    setFilters,
    sortBy,
    setSortBy,
  } = useRoutePagination(router.pathname);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl pb-2 border-b">TodoList</h1>
      </div>
      <div>
        {isReady && (
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
        )}
      </div>
    </Layout>
  );
};

export default TodoListPage;
