import React, { useState, useEffect } from "react";

const TodoSearchForm = ({ controlledFilters, setFilters }) => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    setUserId(controlledFilters?.userId);
  }, [controlledFilters]);

  return (
    <div className="border p-2">
      <div>TodoSearchForm </div>
      <pre>{JSON.stringify({ userId }, null, 2)}</pre>
      <div className="border p-2">
        <div>
          <div>User ID</div>
          <input
            type="text"
            value={userId}
            className="border"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              setFilters({
                ...controlledFilters,
                userId,
              });
            }}
            className="px-3 border border-transparent text-base font-medium text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
          <button
            onClick={(e) => {
              setFilters({
                ...controlledFilters,
                userId: "",
              });
            }}
            className="mx-1 px-3 border border-transparent text-base font-medium text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset UserID
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoSearchForm;
