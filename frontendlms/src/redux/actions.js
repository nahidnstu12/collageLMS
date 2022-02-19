import { authSlice } from "./slice";
const {actions:slice} = authSlice

// loginActions
export const loginActions = (user) => dispatch => dispatch(slice.setLogin(user))