import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        phone:"",
        username:""
    },
    reducers:{
        setLogin:(state, action)=>{
            state.isAuth = true;
            state.phone = action.payload.phone;
            state.username = action.payload.username;
        }
    }
})