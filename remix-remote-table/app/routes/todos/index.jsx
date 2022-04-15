import { useNavigate, useSearchParams } from "@remix-run/react";
import React, { useState, useEffect } from "react";

const TodoIndex = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [foo, setFoo] = useState(null);
  useEffect(() => {
    setFoo(searchParams.get("foo"));
  }, [searchParams]);

  return (
    <>
      <div>TodoIndex</div>
      <pre>{JSON.stringify([...searchParams], null, 2)}</pre>
      <pre>{JSON.stringify({ foo }, null, 2)}</pre>
      <button
        onClick={() => {
          setSearchParams({ a: 1, foo: "bar" });
        }}
      >
        set searchParams
      </button>
    </>
  );
};

export default TodoIndex;
