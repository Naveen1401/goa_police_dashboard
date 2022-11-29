import {configureStore} from '@reduxjs/toolkit'
import complaintSlice from './store/complaintSlice'
import challanSlice from './store/challanSlice'
import tripSlice from './store/tripSlice';
import vacationSlice from './store/vacationSlice';


const store = configureStore({
    reducer: {
        complaint: complaintSlice.reducer,
        challan: challanSlice.reducer,
        trip: tripSlice.reducer,
        vacation: vacationSlice.reducer
    }
})

export default store;