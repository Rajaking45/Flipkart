import { configureStore } from "@reduxjs/toolkit";
import userList from "./reducer";


export const store = configureStore(
    {
        reducer:{
            users : userList,
        }
    }
)
