import React, { useState } from "react";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { auth } from "../../firebase";
import './style.css'

const LogOut = () => { 
    const [status,setStatus] = useState("");
    onAuthStateChanged(auth,(currentStatus)=>{
        setStatus(currentStatus);
    })
    const logout = async() =>{
        await signOut(auth)
    }
    return (
    <>
      <div>
          <button className="logout-btn" onClick={logout}>{status != null ? <Tooltip title="Log out"><LogoutIcon /></Tooltip> : "Log In"}</button>
        {/* <h4>{status?.email}</h4> */}
      </div>
    </>
  );
};

export default LogOut;