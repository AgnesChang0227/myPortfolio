import React, {useRef,useState} from 'react';
import {projects} from "../config/project";
import {Link, useNavigate} from "react-router-dom";
import "../app.css";

const ProjectList = () => {
    const navigate = useNavigate();
    const top = useRef(null);
    const [active, setActive ] = useState(false);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
    }

    return (
        <div>
            {/*<i  className="position-fixed bottom-50 end-0"*/}
            {/*    style={{border:"solid 25px #5346ec",borderRadius:"50%"}}></i>*/}
            <div className="d-flex justify-content-center mt-3">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                     data-bs-smooth-scroll="true" className="scrollspy-example justify-content-center" tabIndex="0"
                >
                    <i ref={top}></i>
                    {projects && projects.sort((a, b) => {
                        return b.finishedDate - a.finishedDate
                    }).map((project, index) => (
                        <>
                            <div
                                className="card mb-3 text-white background-image: var(--bs-gradient) data-mdb-attribute"
                                style={{cursor: "pointer", width: "70vw",backgroundColor:active&&active===index?"#222049":"#363373"}}
                                id="simple-list-item-1"
                                onMouseOver={()=>{setActive(index)}} onMouseLeave={()=>{setActive(false)}}
                                onClick={() => {navigate(`/project/${project.value}`)
                            }}>
                                <img src={`./${process.env.REACT_APP_REPO || ''}${project.captureFolder}/homepage.png`}
                                     className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text" style={{color: "gray", float: "right"}}>
                                        {project.finishedDate.toLocaleDateString()}
                                    </p>
                                    <h5 className="card-title">{project.title}</h5>
                                    <h6 className="card-title">{project.language.join(" / ")}</h6>
                                    <br/>
                                    {project.description.map(item => (
                                        <div>
                                            <li className="card-text">{item}</li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <br/>
                        </>
                    ))}
                </div>
            </div>
        </div>
        // </div>
    );
};

export default ProjectList;