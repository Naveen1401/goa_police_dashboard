import { createSlice } from '@reduxjs/toolkit';

const challanSlice = createSlice({
    name: 'challan',
    initialState: {
        challan: [],
        abchallan:[],
    },
    reducers: {
        setChallan(state, action) {
            const { data } = action.payload;
            state.challan = data;
        },
        setAbChallan(state, action) {
            const { data } = action.payload;
            state.abchallan = data;
        }
    }
})

export const challanSliceActions = challanSlice.actions;
export default challanSlice;