import React, { useState } from "react";
import TodoListWithSearchForm from "./TodoListWithSearchForm";

const TodoListWidget = ({ defaultFilters, defaultSortBy }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({ userId: defaultFilters?.userId });
  const [sortBy, setSortBy] = useState(defaultSortBy ? defaultSortBy : []);

  return (
    <div className="border p-2">
      <div>TodoListWidget</div>
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
    </div>
  );
};

export default TodoListWidget;
