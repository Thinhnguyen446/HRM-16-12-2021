import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { login, setLoading, setError, setUser } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectUser = (state) => state.user.user;


export default userSlice.reducer