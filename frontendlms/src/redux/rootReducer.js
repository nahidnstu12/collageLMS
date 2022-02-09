import {combineReducers} from "@reduxjs/toolkit"
import { authSlice } from "./slice"

export const rootReducer = combineReducers({
    auth:authSlice.reducer
})