import { configureStore } from "@reduxjs/toolkit";
import modalActionSlice from './modal'
export const store=configureStore({
    reducer:{
        modalState:modalActionSlice
    }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch