import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import usersReducer from "../features/Users";



export default configureStore({
    reducer:{
        user:userReducer,
        users:usersReducer,
    }
})
