import React, {useState} from 'react';
import "../app.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);


    return (
        <>
            <nav className={`sidebar position-fixed bottom-0 ${active?``:"close"}`}
                 style={{height:"100vh",}}>
                <header style={{height:"20vh",marginTop:"2rem"}}>
                    <div className="img-text">

                        {/*<img src={`./${process.env.REACT_APP_REPO ||""}images/icon.jpg`} alt=""*/}
                        <img src={`./images/icon.jpg`} alt=""
                        className="rounded-circle" hidden={!active}
                             style={{width:"120px",margin:"auto",borderWidth:"2px",border:"solid 5px #5346ec"}}/>
                    </div>
                    <div className="text-center mt-2 text">
                        <h5>Agnes Chang</h5>
                        <h6 style={{color:"gray"}}>Web Developer</h6>
                        <h6 style={{color:"gray",fontSize:"13px"}}>
                            <i className="bi bi-envelope-check-fill" style={{fontSize:"16px"}}> </i>
                            agneschang0227@gmail.com
                        </h6>
                    </div>
                    <i className="bx bx-chevron-right toggle" onClick={()=>{
                        setActive(!active)}}>
                    </i>
                </header>
                <div className="menu-bar" style={{paddingTop:"30px"}}>
                    <div className="menu">
                        {/*// <!--  導航欄的每項   -->*/}
                        <ul className="menu-links ps-0">
                            <li className="nav-link">
                                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>
                                    <i className="bi bi-house-fill icon ps-1"></i>
                                    <span className="text nav-text">Homepage</span>
                                </a>
                            </li>
                            {/*<li className="nav-link ">*/}
                            {/*    <a style={{cursor:"pointer"}} onClick={()=>{navigate("/aboutMe")}}>*/}
                            {/*        <i className="bi bi-chat-right-text-fill icon ps-1"></i>*/}
                            {/*        <span className="text nav-text">About Me</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li className="nav-link">
                                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/Resume")}}>
                                    <i className="bi bi-file-person-fill icon ps-1"></i>
                                    <span className="text nav-text">Resume</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a style={{cursor:"pointer"}} onClick={()=>{navigate("/Projects")}}>
                                    <i className="bi bi-folder2-open icon ps-1"></i>
                                    <span className="text nav-text">Projects</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="bottom-content mb-3">*/}
                    {/*    <li className="mode">*/}
                    {/*        <div className="sun-moon">*/}
                    {/*            <i className={`bi icon ${darkMode?*/}
                    {/*                "bi-lightbulb text-light":" bi-lightbulb-fill text-secondary"}`}></i>*/}
                    {/*        </div>*/}
                    {/*        <span className="mode-text text">{darkMode?"Dark Mode":"Light Mode"}</span>*/}
                    {/*        <div className="toggle-switch" onClick={()=>{setDarkMode(!darkMode)}}>*/}
                    {/*            <span className="switch"></span>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;