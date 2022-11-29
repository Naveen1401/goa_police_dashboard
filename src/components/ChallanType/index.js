import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { challanSliceActions } from '../../store/challanSlice';
import "./style.css"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';

const ChallanType = ()=> {

    const [topicData, setTopicData] = useState([]);

    const data = useSelector((state) => state.challan.abchallan);
    const filtdata = useSelector((state) => state.challan.challan);

    const dispatch  = useDispatch();


    // console.log("----->",data);

    const selectedTopic = (event) =>{
        const filterWord = event.target.value;
        const topicList = data.filter((value)=>{
            if(filterWord==="All") {
                return data
            }
            else{
                return value.eyeColor.toLowerCase().includes(filterWord.toLowerCase());
            }
        });

        dispatch(challanSliceActions.setChallan({data: topicList}));

        // setTopicData(topicList);
    }

    return (
    <div className='challanDiv'>
        <div className='booklistHeading'>
            <h2>No. of Challan</h2>
            <h3>{filtdata.length} Challan</h3>
        </div>
        <div className='topicfilter'>
            <FilterAltIcon/>
            <select name="TopicSelector" className='topicselector' id="topicSelector" onChange={selectedTopic}>
                <option value="All">All</option>
                <option value="c1">C1</option>
                <option value="c2">C2</option>
                <option value="c3">C3</option>
                <option value="c4">C4</option>
                <option value="c5">C5</option>
            </select>
        </div>
        <div className='exportBtn-div'>
            <ReactHtmlTableToExcel className = "export-btn" table = "challan-table" filename = "Challan-cheet" sheet = "Sheet" buttonText = "Export Challan Sheet"/>
        </div>
    </div>
    )
}

export default ChallanType
 