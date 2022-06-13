import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://62a71619bedc4ca6d7c19d15.mockapi.io/',
}),
endpoints: builder => ({
    fetchContacts: builder.query({
        query: ()=>`/contacts`,
    }),
}),
});

export const {useFetchContactsQuery} = contactsApi;