import { Link, useLocation } from "react-router-dom";
import SideDrawer from "../Drawer";
import LogOut from '../LogOut'
import './style.css'

const NaveBar = ()=>{
    const location = useLocation();
    return(
        <>
        <div className="nav-div">
            <div><SideDrawer/></div>
            <LogOut/>
        </div>
        </>
    )
}

export default NaveBar