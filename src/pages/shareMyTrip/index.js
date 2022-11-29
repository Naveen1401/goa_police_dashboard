import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
// import SearchUser from '../../components/SearchUser';
import {db} from "../../firebase"
import {collection, doc, getDocs} from "firebase/firestore"
import { tripSliceActions } from '../../store/tripSlice';
import AllTrips from '../../components/AllTrips';


const ShareMyTrip = () => {

    const [users,setUsers] = useState([]);
    const userRef = collection(db,"challan")
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const getUsers = async()=>{
        const data = await getDocs(userRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
        dispatch(tripSliceActions.setAbTrip({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        dispatch(tripSliceActions.setTrip({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id})))}));
        }
        getUsers()

    },[])

    return (
        <div>
            <AllTrips/>
        </div>
    )
}

export default ShareMyTrip;