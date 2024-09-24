import React from "react";
import { Link } from "react-router-dom"; 
import "./csss/heather.css";

const Navbar = () => {
  return (

   
 

    <nav className="navbar">
      <div className="buttons">
        {/* <Link className="nav-link" to="/">todo</Link>  */}
        <Link className="nav-link" to="/2">paying</Link>
        <Link className="nav-link" to="/">add card</Link>
        <Link className="nav-link" to="/1">to do list</Link>
        <Link className="nav-link" to="/3">counters</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;