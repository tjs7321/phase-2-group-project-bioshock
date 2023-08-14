import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "30%",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    };


    return (
        <div>
            <NavLink
            to="/" exact
            style={linkStyles}
            activeStyle={{background: "darkblue"}}
            >
            Home
            </NavLink>
            <NavLink
            to="/showroom" exact
            style={linkStyles}
            activeStyle={{background: "darkblue"}}
            >
            Showroom
            </NavLink>
            <NavLink
            to="/creator" exact
            style={linkStyles}
            activeStyle={{background: "darkblue"}}
            >
            Creator
            </NavLink>
        </div>
        )
}

export default NavBar