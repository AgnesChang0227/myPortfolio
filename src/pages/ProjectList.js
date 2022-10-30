import React, {useRef} from 'react';
import {projects} from "../config/project";
import {Link, useNavigate} from "react-router-dom";

const ProjectList = () => {
    const navigate = useNavigate();
    const top = useRef(null);

    const handleClick = (ref)=>{
        ref.current?.scrollIntoView({behavior:"smooth",block:"center"});
    }

    return (
        <div>
            <div className="row ">
                <div className="col-2 bg-dark position-sticky top-0" style={{height: "100vh", paddingTop: "70px"}}>
                    <div id="simple-list-example"
                         className="d-flex flex-column gap-2 simple-list-example-scrollspy">
                        <a className=" w-100 rounded btn btn-secondary " onClick={()=>{handleClick(top)}}>Back to Top</a>
                        {projects&&projects.sort((a,b)=> {
                            return  b.finishedDate - a.finishedDate
                        }).map((project,index)=>(
                            <a className=" w-100 rounded btn btn-dark btn-sm border border-secondary" >{project.title}</a>
                        ))}
\                    </div>
                </div>
                <div className="col-10 p-3" >
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                         data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
                        <i ref={top}></i>
                        {projects&&projects.sort((a,b)=> {
                            return  b.finishedDate - a.finishedDate
                        }).map((project,index)=>(
                            <>
                                <div className="card mb-3 bg-dark text-white background-image: var(--bs-gradient)"
                                     style={{cursor:"pointer",width:"50vw"}}
                                     id="simple-list-item-1" onClick={()=>{navigate("#")}}>
                                    <img  src={`./${process.env.REACT_APP_REPO ||''}${project.captureFolder}/homepage.png`}
                                          className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text" style={{color:"gray",float:"right"}}>
                                            {project.finishedDate.toLocaleDateString()}
                                        </p>
                                        <h5 className="card-title">{project.title}</h5>
                                        <h6 className="card-title">{project.language.join(" / ")}</h6>
                                        <br/>
                                        {project.description.map(item=>(
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
        </div>
    );
};

export default ProjectList;