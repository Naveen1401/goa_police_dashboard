import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoutes = ()=>{
    const [status,setStatus] = useState("");
    onAuthStateChanged(auth,(currentStatus)=>{
        setStatus(currentStatus);
    })

    return status!=null? <Outlet/> : <Navigate to = "/" />;
}

export default ProtectedRoutes;