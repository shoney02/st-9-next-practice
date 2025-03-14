import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import TodoPage from "./page";

const TodoPageComponent = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TodoPage />
    </QueryClientProvider>
  );
};

export default TodoPageComponent;
