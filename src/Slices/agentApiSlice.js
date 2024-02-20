import { AGENT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const agentApiSLice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        addBusDetails:builder.mutation({
            query:(data)=>({
                url:`${AGENT_URL}/addbus`,
                method: 'POST',
                body:data
            }),
            invalidateTages:['Bus']
        }),
        editBusDetails:builder.mutation({
            query:({busId,data})=>({
                url:`${AGENT_URL}/editbus/${busId}`,
                method: 'PUT',
                body:data
            }),
            invalidateTages:['Bus']
        }),

        getAllBuses:builder.query({
            query:()=>({
                url:`${AGENT_URL}/allbuses`,
            }),
            providesTags:['Bus'],
            keepUnusedDataFor:5,
        }),

        getBus:builder.query({
            query:(id)=>({
                url:`${AGENT_URL}/getbus/${id}`,
            }),
            providesTags:['Bus'],
            keepUnusedDataFor:5,
        }),

        deleteBus:builder.mutation({
            query:(busId)=>({
                url:`${AGENT_URL}/deletebus/${busId}`,
                method: 'DELETE',
            }),
            invalidateTages:['Bus']
        }),

        getAgentBuses: builder.query({
            query: (agentId) => ({
              url: `${AGENT_URL}/agentbuses/${agentId}`
            }),
            providesTags: ['Bus'],
            keepUnusedDataFor: 5,
          }),
          

    })
});

export const {
    useAddBusDetailsMutation ,
    useGetAllBusesQuery,
    useDeleteBusMutation,
    useGetBusQuery,
    useEditBusDetailsMutation,
    useGetAgentBusesQuery
} = agentApiSLice;