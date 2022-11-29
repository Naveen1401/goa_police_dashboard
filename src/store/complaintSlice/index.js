import { createSlice } from '@reduxjs/toolkit';

const complaintSlice = createSlice({
    name: 'complaint',
    initialState: {
        complaint: [],
        abcomplaint:[],
    },
    reducers: {
        setComplaint(state, action) {
            const { data } = action.payload;
            state.complaint = data;
        },
        setAbComplaint(state, action) {
            const { data } = action.payload;
            state.abcomplaint = data;
        }
    }
})

export const complaintSliceActions = complaintSlice.actions;
export default complaintSlice;