"use client"
import Image from "next/image";
import { useGetAllPostQuery, useGetPostByLimitQuery, useGetPostQuery } from "./store/features/dummyApi";
import PostsList from "../../src/components/postList"
import DeleteData from "../../src/components/deleteData"

export default function Home() {
  const {data, error, isLoading} = useGetPostByLimitQuery(2);

  // console.log("fetched data-------",JSON.stringify(data));
  console.log("single data-----", data);
  
  return (
    <>
      <PostsList />
      <DeleteData />
    </>
  );
}
