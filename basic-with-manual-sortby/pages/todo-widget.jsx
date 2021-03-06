import React from "react";
import Layout from "../layouts";
import TodoListWidget from "../features/todo/components/TodoListWidget";

const TodoListWidgetPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl pb-2 border-b">TodoList Widgets</h1>
        <div>
          <TodoListWidget defaultFilters={{}} />
        </div>
        <div>
          <TodoListWidget defaultFilters={{ userId: 10 }} />
        </div>
        <div>
          <TodoListWidget
            defaultFilters={{}}
            defaultSortBy={[{ id: "title", desc: false }]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TodoListWidgetPage;
