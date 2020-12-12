import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
function Nav() {
    const location = useLocation();
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item"><Link to="/order" className={location.pathname === "/order" ? "nav-link active" : "nav-link"}>Order</Link></li>
            <li className="nav-item list-group-items"><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Random Users</Link></li>
            <li className="nav-item"><Link to="/male" className={location.pathname === "/male" ? "nav-link active" : "nav-link"}>Male Users</Link></li>
            <li className="nav-item"><Link to="/female" className={location.pathname === "/female" ? "nav-link active" : "nav-link"}>Female Users</Link></li>
            <li className="nav-item"><Link to="/all" className={location.pathname === "/all" ? "nav-link active" : "nav-link"}>All User</Link></li>
        </ul>
    )
}
export default Nav;