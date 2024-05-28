import { url } from "inspector";
import { baseApi } from "../baseApi"
export const dummyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        getPost: builder.query({
            query: (id) => ({
                url: 'posts/3',
                method: 'GET'
            })
        }),
        getPostByLimit: builder.query({
            query: (num: number) => ({
                url: `posts?_limit=${num}`,
                method: 'GET',
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),
        createPost: builder.mutation({
            query: (data) => {
                console.log("create data mutation -----", data);
                
                return {
                    url: "posts",
                    method: "POST",
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }
            }
        }),
        updatePost: builder.mutation({
            query: (updateData) => {
                console.log("updateData in query mutation-------", updateData);

                const { id, ...data } = updateData
                console.log("data in update mutation--", id, data);

                return {
                    url: `posts/${id}`,
                    method: "PUT",
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }
            }
        })
    })
})

export const { useGetAllPostQuery, useGetPostQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = dummyApi;