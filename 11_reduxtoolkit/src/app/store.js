import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/slice/todoSlice";

export const store = configureStore({
    reducer: todoReducer
})