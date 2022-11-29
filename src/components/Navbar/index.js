import { Link, useLocation } from "react-router-dom";
import SideDrawer from "../Drawer";
import LogOut from '../LogOut'
import './style.css'

const NaveBar = ()=>{
    const location = useLocation();
    return(
        <>
        <div className="nav-div">
            {/* <ul>
                <li><Link className = {location.pathname==="/challan"? 'link curr-page':'link'} to={"/challan"}>Challan</Link></li>
                <li><Link className={location.pathname==="/complaint"? 'link curr-page':'link'} to={"/complaint"}>Complaint</Link></li>
                <li><Link className={location.pathname==="/sharemytrip"? 'link curr-page':'link'} to={"/sharemytrip"}>Share My Trip</Link></li>
                <li><Link className={location.pathname==="/vacation"? 'link curr-page':'link'} to={"/vacation"}>Vacation</Link></li>
            </ul> */}
            <div><SideDrawer/></div>
            <LogOut/>
        </div>
        </>
    )
}

export default NaveBar