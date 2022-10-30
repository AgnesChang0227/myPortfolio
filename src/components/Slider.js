import React from 'react';
import {useNavigate} from "react-router-dom";

const Slider = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div style={{textAlign:"center",textDecoration:"underline",marginTop:"10px",color:"darkslategray"}}>
                    <h1 >Recent Project</h1>
                </div>
                <div className="carousel-inner w-75 m-auto bg-dark shadow-lg mb-5 bg-body rounded" style={{padding:"15px"}}>
                    <div style={{cursor:"pointer"}} className="carousel-item active" data-bs-interval="10000"
                         onClick={()=>{navigate("/project/owlSchool")}}>
                        <img src={`./${process.env.REACT_APP_REPO ||''}images/owlSchool.png`} className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{cursor:"pointer"}} className="carousel-item" data-bs-interval="2000">
                        <img src={`./${process.env.REACT_APP_REPO ||''}images/project7.png`} className="d-block w-100" alt="..."/>
                    </div>
                    <div style={{cursor:"pointer"}} className="carousel-item">
                        <img src={`./${process.env.REACT_APP_REPO ||''}images/photoWebsite.png`} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Slider;