import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Investors</h1>
                </div>
            </nav>
        </>
    );
}

export default Navbar;