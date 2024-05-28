import {configureStore } from '@reduxjs/toolkit'
import { dummyApi } from './features/dummyApi'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer : {
        [dummyApi.reducerPath] : dummyApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyApi.middleware),
})

setupListeners(store.dispatch)


