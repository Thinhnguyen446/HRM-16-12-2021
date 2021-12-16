import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createData, retrieveData, updateData } from "../service/airtable.service";
import { tableConfig } from "../utils/airtable";

const initialState = {
    loading: false,
    staff: null,
    error: null,
    success: false,
}
const Staff = tableConfig("Staff")

export const fetchStaffList = createAsyncThunk("staff/fetch", async()=> {
    const res = await retrieveData({}, Staff, "Staff");
    return res;
})

export const createStaff = createAsyncThunk("staff/create", async(data)=> {
    const res = await createData(Staff, data, "Staff");
    return res;
})

export const updateStaff = createAsyncThunk("staff/update", async(data)=> {
    const {recordId, value} = data;
    const res = await updateData(recordId, Staff, value, "Staff");
    return res;
})

export const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchStaffList.pending, (state, action) => {
            state.success = false;
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchStaffList.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.error;
        })
        .addCase(fetchStaffList.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
        })
        .addCase(createStaff.pending, (state, action) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(createStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.success = false;
        })
        .addCase(createStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
        })
        .addCase(updateStaff.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(updateStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.success = false;
        })
        .addCase(updateStaff.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = true;
        })
    }
})

//export const { login, setLoading, setError, setUser } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export const selectSuccess = (state) => state.user.success;
export const selectStaff = (state) => state.staff.staff;


export default staffSlice.reducer