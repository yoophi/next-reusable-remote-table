import React, { useState } from "react";
import TodoListWithSearchForm from "./TodoListWithSearchForm";

const TodoListWidget = ({ defaultFilters }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({ userId: defaultFilters?.userId });

  return (
    <div className="border p-2">
      <div>TodoListWidget</div>
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
    </div>
  );
};

export default TodoListWidget;
