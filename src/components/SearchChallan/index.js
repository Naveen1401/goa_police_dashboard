import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { challanSliceActions } from '../../store/challanSlice';
// import { userSliceActions } from '../../store/userSlice';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchChallan = ({ placeholder }) => {

    const data = useSelector((state) => state.challan.abchallan);
    const filtdata = useSelector((state) => state.challan.challan);

    const dispatch = useDispatch();

    const handleFilter = (event) => {
        const searchChallanId = event.target.value;
        const filteredList = data?.filter((value) => {
            return value.challan_id.toString().includes(searchChallanId);
        });

        if (searchChallanId === "") {
            dispatch(challanSliceActions.setChallan({ data: data }));
        } else {
            dispatch(challanSliceActions.setChallan({ data: filteredList }));
        }
    }

    return (
        <div>
            <div className="searchDiv">
                <div className='searchBox'>
                    <SearchRoundedIcon style={{marginRight:"5px", height:"2rem"}}/>
                    <input type="text" placeholder={placeholder} onChange={handleFilter} />
                </div>
            </div>
        </div>
    )
}

export default SearchChallan