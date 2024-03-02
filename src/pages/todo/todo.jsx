import React from "react";
import { useGetTodo } from "./service/query/useGetTodo";
import { Card } from "../../components/card";
import { Form } from "../../components/form";

export const Todo = () => {
  const { data, isLoading, error } = useGetTodo();
  return (
    <div>
        <Form/>
      {isLoading ? (
        <h1 className="text-3xl">Loading...</h1>
      ) : (
        <>
          {data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </>
      )}
    </div>
  );
};
