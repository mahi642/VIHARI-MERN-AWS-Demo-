import { ADMIN_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addUserDetails:builder.mutation({
            query:(data)=>({
                url:`${ADMIN_URL}/adduser`,
                method: 'POST',
                body:data
            }),
            invalidateTages:['User']
        }),
        getAllUsers:builder.query({
            query:()=>({
                url:`${ADMIN_URL}/allusers`,
            }),
            providesTags:['User'],
            keepUnusedDataFor:5,
        }),
        sendMails:builder.mutation({
            query:({ subject, message })=>({
              url:`${ADMIN_URL}/announcements`,
              method:"POST",
              body:{subject,message},
            }),
            invalidatesTags:['Admin']
          }),
          deleteUser:builder.mutation({
            query:(userId)=>({
                url:`${ADMIN_URL}/deleteuser/${userId}`,
                method: 'DELETE',
            }),
            invalidateTages:['User']
        }),
    })
});

export const {
    useAddUserDetailsMutation ,
    useGetAllUsersQuery,
    useSendMailsMutation,
    useDeleteUserMutation,

}=adminApiSlice;