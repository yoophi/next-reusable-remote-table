import { useRouter } from "next/router";
import React from "react";
import { useRoutePagination } from "../features/remote-table/hooks/use-route-pagination";
import TodoListWithSearchForm from "../features/todo/components/TodoListWithSearchForm";
import Layout from "../layouts";

const TodoListPage = () => {
  const router = useRouter();
  const {
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
    filters,
    setFilters,
  } = useRoutePagination(router.pathname);

  return (
    <Layout>
      <div>
        <h1 className="text-2xl pb-2 border-b">TodoList</h1>
      </div>
      <div>
        <TodoListWithSearchForm
          controlledPageIndex={pageIndex}
          controlledPageSize={pageSize}
          controlledFilters={filters}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
          setFilters={setFilters}
        />
      </div>
    </Layout>
  );
};

export default TodoListPage;
