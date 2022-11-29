import { createSlice } from '@reduxjs/toolkit';

const vacationSlice = createSlice({
    name: 'vacation',
    initialState: {
        vacation: [],
        abvacation:[],
    },
    reducers: {
        setVacation(state, action) {
            const { data } = action.payload;
            state.vacation = data;
        },
        setAbVacation(state, action) {
            const { data } = action.payload;
            state.abvacation = data;
        }
    }
})

export const vacationSliceActions = vacationSlice.actions;
export default vacationSlice;