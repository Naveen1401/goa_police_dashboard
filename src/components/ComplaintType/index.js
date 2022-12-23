import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { complaintSliceActions } from '../../store/complaintSlice';
import "./style.css"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

const ComplaintType = ()=> {

    const [topicData, setTopicData] = useState([]);

    const data = useSelector((state) => state.complaint.abcomplaint);
    const filtdata = useSelector((state) => state.complaint.complaint);

    const dispatch  = useDispatch();


    console.log(topicData);

    const selectedTopic = (event) =>{
        const filterWord = event.target.value;
        const topicList = data.filter((value)=>{
            if (filterWord === "All") {
                return data
            }
            else {
                return value.type.toLowerCase().includes(filterWord.toLowerCase());
            }
        });

        dispatch(complaintSliceActions.setComplaint({data: topicList}));

        // setTopicData(topicList);
    }

    return (
    <div className='complaintDiv'>
        <div className='booklistHeading'>
            <h2>No. of Complaints</h2>
            <h3>{filtdata.length} Complaint</h3>
        </div>
        <div className='topicfilter'>
            <FilterAltIcon/>
            <select name="TopicSelector" className='topicselector' id="topicSelector" onChange={selectedTopic}>
                <option value="All">All</option>
                <option value="drug">Drug</option>
                <option value="fraud">Fraud</option>
                <option value="theft">Theft</option>
                <option value="voilance">Voilance</option>
            </select>
        </div>
        <div className='exportBtn-div'>
            <ReactHtmlTableToExcel className = "export-btn" table = "complaint-table" filename = "Challan-cheet" sheet = "Sheet" buttonText = "Export Challan Sheet"/>
        </div>
    </div>
    )
}

export default ComplaintType
 