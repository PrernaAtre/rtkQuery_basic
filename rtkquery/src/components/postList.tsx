"use client"
import React from "react";
import { useGetAllPostQuery, useGetPostByLimitQuery } from "../app/store/features/dummyApi";

const PostsList = () => {
  const {data, error, isLoading} = useGetPostByLimitQuery(2);
  console.log("data-------", data);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <ul>
      {data?.map((post : any, id : any) => 
        <div id={id}>
          <h2>{post.id} {post.title}</h2>
          <hr />
        </div>
      )}
    </ul>
    </>
  );
};

export default PostsList;