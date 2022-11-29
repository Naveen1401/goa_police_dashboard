import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
// import ChallanData from "../../challan.json"   
// import SearchUser from '../../components/SearchUser';
import { challanSliceActions } from '../../store/challanSlice';
import {db} from "../../firebase"
import {collection, doc, getDocs} from "firebase/firestore"
import AllChallan from '../../components/AllChallan';
import ChallanType from '../../components/ChallanType';


const Challan = () => {


    const [users,setUsers] = useState([]);
    const userRef = collection(db,"challan")
    
    const dispatch = useDispatch();
    useEffect(()=>{
        const getUsers = async()=>{
        const data = await getDocs(userRef);
        setUsers(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
        dispatch(challanSliceActions.setAbChallan({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        dispatch(challanSliceActions.setChallan({ data: (data.docs.map((doc)=>({...doc.data(), id :doc.id}))) }));
        }
        getUsers()

    },[])

    // users.map((user)=>{
    //     console.log(user.name);
    // })

    // const ChallanData = users;

    // useEffect(() => {
    //     dispatch(challanSliceActions.setAbChallan({ data: ChallanData }));
    //     dispatch(challanSliceActions.setChallan({ data: ChallanData }));
    // }, []);

    return (
        <div>
            {/* <SearchUser placeholder="Ender Roll No."/> */}
            {/* <ComplaintType/> */}
            <ChallanType/>
            <AllChallan/>
        </div>
    )
}

export default Challan;
