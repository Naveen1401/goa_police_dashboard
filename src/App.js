import { useEffect, useState } from "react";
import {auth} from "./firebase"
import {collection, doc, getDocs} from "firebase/firestore"
import { Navigate, Route , Routes, } from 'react-router-dom'
import './App.css'
import ShareMyTrip from "./pages/shareMyTrip";
import Vacation from "./pages/vacation";
import Challan from "./pages/challan";
import Complaint from "./pages/complaint";
import SideDrawer from "./components/Drawer";
import CreateAcc from "./pages/createAcc";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoutes from "./ProtectedRoutes";
import NaveBar from "./components/Navbar";

function App() {
  // const [users,setUsers] = useState([]);
  // const userRef = collection(db,"User")

  // useEffect(()=>{
  //   const getUsers = async()=>{
  //     const data = await getDocs(userRef);
  //     setUsers(data.docs.map((doc)=>({...doc.data(), id :doc.id})))
  //   }
  //   getUsers()
  // },[])


  const [status,setStatus] = useState("");
  onAuthStateChanged(auth,(currentStatus)=>{
      setStatus(currentStatus);
  })

  if(status!=null){
    console.log("Login");
  }else{
    console.log("Logout");
  }



  return (
    <div className="App">
      <div className={status != null ?"header-div":"hide_header"}>
        <div className="sidebar"><SideDrawer/></div>
        <LogOut/>
      </div>
      {/* <NaveBar/> */}
      <Routes>
          <Route path = "/" element = {
          status==null?
          (<LogIn/>) : (<Navigate replace to={"/challan"}/>)
          }/>
        <Route element = {<ProtectedRoutes/>}>
          <Route path = "/complaint" element={<Complaint/>}/> 
          <Route path = "/challan" element={<Challan/>}/> 
          <Route path = "/sharemytrip" element={<ShareMyTrip/>}/>
          <Route path = "/vacation" element={<Vacation/>}/>
          <Route path = "/createaccount" element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
