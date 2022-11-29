import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
    name: 'trip',
    initialState: {
        trip: [],
        abtrip:[],
    },
    reducers: {
        setTrip(state, action) {
            const { data } = action.payload;
            state.trip = data;
        },
        setAbTrip(state, action) {
            const { data } = action.payload;
            state.abtrip = data;
        }
    }
})

export const tripSliceActions = tripSlice.actions;
export default tripSlice;