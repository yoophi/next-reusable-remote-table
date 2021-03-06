import React, { useMemo } from "react";
import RemoteTable from "../../remote-table/RemoteTable";

const TodoRemoteTable = (props) => {
  const {
    data,
    loading,
    controlledPageCount,
    controlledPageIndex,
    controlledPageSize,
    controlledSortBy,
    setPageIndex,
    setPageSize,
    setSortBy,
  } = props;

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        sortable: true,
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: true,
      },
      {
        Header: "User",
        accessor: "userId",
        sortable: true,
      },
      {
        Header: "Completed",
        accessor: (d) => (d.completed ? "true" : "false"),
      },
    ],
    []
  );

  return (
    <div className="border p-2">
      <div>TodoRemoteTable</div>
      <pre>{JSON.stringify({ controlledSortBy }, null, 2)}</pre>
      <div>
        <RemoteTable
          columns={columns}
          data={data}
          loading={loading}
          controlledPageCount={controlledPageCount}
          controlledPageIndex={controlledPageIndex}
          controlledPageSize={controlledPageSize}
          controlledSortBy={controlledSortBy}
          setControlledPage={setPageIndex}
          setControlledPageSize={setPageSize}
          setControlledSortBy={setSortBy}
        />
      </div>
    </div>
  );
};

export default TodoRemoteTable;
