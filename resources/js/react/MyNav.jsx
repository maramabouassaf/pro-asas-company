import React, {useState} from "react";
import"../../css/Style.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";


function MyNav() {
    const[mobile,setMobile]=useState(false)
return(
    <>
        <nav className="navbar" >
                <img src="Images/logo.jpg" className={mobile ? "logoClick"  : "logo"} alt=""/>
            <ul
                className={mobile ? "nav-links-mobile " : "nav-links mt-2"} onClick={()=> setMobile(true)}
            >
          <Link  to="/"> <li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Home</li></Link>
          <Link to="/arch"><li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Architecture</li></Link>
          <Link to="/land"><li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Landscape</li></Link>
           <Link to="/design"><li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Interior Design</li></Link>
           <Link to="/fit"><li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Fit Out</li></Link>
            <Link to="/contra"><li style={{listStyle:"none", fontSize:"0.87rem"}} className={mobile ? "fontFamily fontWeight lis1"  : "fontFamily fontWeight lis"}>Contracting</li></Link>
            </ul>
                <button className="mobile-menu-icon"  onClick={() => setMobile(!mobile)}>
                    {mobile ? <FontAwesomeIcon icon={faXmark}/>  :  <FontAwesomeIcon icon={faBars}/>}
                </button>
        </nav>
        </>
)
}
export default MyNav
