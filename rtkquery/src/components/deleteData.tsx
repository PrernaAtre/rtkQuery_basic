import React from 'react'
import { useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } from '../app/store/features/dummyApi';

const DeleteData = () => {
    const [deletePost, responseData] = useDeletePostMutation();
    const [createPost , response] = useCreatePostMutation();
    const [updatePost , res] = useUpdatePostMutation();
    const newData  = {
        id : 4,
        title : "latest data",
        description : "latest data 2 decr",
        userId : "10"
    }

    const updateData = {
        id : 99,
        title : "update data",
        description : "update data 2 decr",
        userId : "10"
    }
    const { id, ...data } = updateData;
    console.log("responseData update -------", res);

    
  return (
    <>
    <h1>delete</h1>
        <button onClick={()=>{deletePost(2)}}>Delete Data</button>
        <br/>
        <button onClick={()=>{createPost(newData)}}>Create Data</button>
        <br />
        <button onClick={()=>{updatePost(updateData)}}>Update Data</button>
    </>
  )
}
export default DeleteData;