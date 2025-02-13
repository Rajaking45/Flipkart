import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    alert:false,
    alertmessage:'success',
    Chatcotainner:false
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
        Enablechat: (state, action) => {
            state.Chatcotainner = true;
        },
    }
}) 

export const {adduser,deletUser,EnableAlert,DisableAlert,Enablechat} = userList.actions;
export default userList.reducer;