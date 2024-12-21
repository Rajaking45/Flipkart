import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    alert:false,
    alertmessage:'success'
};


const userList = createSlice({
    name: 'user',
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.users.push(action.payload)
            state.alert = true;
            state.alertmessage = "Account created"
        },
        deletUser: (state, action) => {

        },
        EnableAlert: (state, action) => {
            state.alert = true;
            state.alertmessage = action.payload
        },
        DisableAlert: (state, action) => {
            state.alert = true;
            state.alertmessage = ''
        },
    }
}) 

export const {adduser,deletUser,EnableAlert,DisableAlert} = userList.actions;
export default userList.reducer;