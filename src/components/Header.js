import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="position-sticky top-0" style={{zIndex:"1"}}>
            <div className="collapse " id="navbarToggleExternalContent">
                <div className="bg-dark p-4 d-flex">
                    <div className="d-inline-block">
                        <img src="./images/icon.jpg" className="rounded-circle "  data-bs-toggle="collapse"style={{width:"100px",display:"inline-block"}} alt=""/>
                    </div>
                    <div className="d-inline-block" style={{marginLeft:"30px"}}>
                        <h5 className="text-white h4" >Hello! This is Agnes, nice to meet you!</h5>
                        <span className="text-muted">I made this website about 2 days to show the projects i have done.</span>
                        <br/>
                        <span className="text-muted">It may a little simple but i will improve it in the future. Thank you for your patience!</span>
                        <br/><br/>
                        <h6 className="text-muted ">Email: agneschang0227@gmail.com</h6>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid" >
                    <h4 onClick={()=>{navigate("/")}} className="ms-5 " style={{color:"gray",cursor:"pointer"}}>AgnesChang</h4>
                    <div className="ms-5 m-auto">
                        <button className="btn btn-outline-secondary ms-2" type="button">About me</button>
                        <button className="btn btn-outline-secondary ms-2" type="button"
                        onClick={()=>{navigate("/projects")}}>
                            Projects
                        </button>
                    </div>
                    <button className="navbar-toggler me-5 float-end" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;