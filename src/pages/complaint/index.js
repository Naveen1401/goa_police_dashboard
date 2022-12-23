import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import AllComplaint from '../../components/AllComplaint';
import ComplaintType from '../../components/ComplaintType';
// import SearchUser from '../../components/SearchUser';
import {db} from "../../firebase"
import {collection, doc, getDocs} from "firebase/firestore"
import { complaintSliceActions } from '../../store/complaintSlice';


const Complaint = () => {


    const [users,setUsers] = useState([]);
    const userRef = collection(db,"complaint")
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const getUsers = async()=>{
        const data = await getDocs(userRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
        dispatch(complaintSliceActions.setAbComplaint({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        dispatch(complaintSliceActions.setComplaint({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        }
        getUsers()

    },[])

    return (
        <div>
            <ComplaintType/>
            <AllComplaint/>
        </div>
    )
}

export default Complaint;