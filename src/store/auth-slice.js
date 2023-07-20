import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tokenId: localStorage.getItem('user'),
    email: localStorage.getItem('userEmail'),
    isLoggedIn: localStorage.getItem('isLoggedIn')
}

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login(state, action) {
            state.tokenId = action.payload.tokenId;
            state.email = action.payload.email;
            localStorage.setItem('user', action.payload.tokenId);
            localStorage.setItem('userEmail', action.payload.email);
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', true);
        },
        logout(state){
            state.isLoggedIn = false;
            localStorage.clear();
        }
    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer; 