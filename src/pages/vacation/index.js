import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import AllVacations from '../../components/AllVacation';
import {db} from "../../firebase"
import {collection, doc, getDocs} from "firebase/firestore"
import { vacationSliceActions } from '../../store/vacationSlice';


const Vacation = () => {

    const [users,setUsers] = useState([]);
    const userRef = collection(db,"vacationDetails")
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const getUsers = async()=>{
        const data = await getDocs(userRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
        dispatch(vacationSliceActions.setAbVacation({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        dispatch(vacationSliceActions.setVacation({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        }
        getUsers()

    },[])

    return (
        <div>
            <AllVacations/>
        </div>
    )
}

export default Vacation;