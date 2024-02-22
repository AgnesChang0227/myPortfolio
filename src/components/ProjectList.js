import React, {useRef, useState} from 'react';
import {projects} from "../config/project";
import {Link, useNavigate} from "react-router-dom";
import "../app.css";


const ProjectList = () => {
    const imagesPath = process.env.PUBLIC_URL+"/images";

    const navigate = useNavigate();
    const top = useRef(null);
    const [active, setActive] = useState(false);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
    }

    const button = (project, path, index) => {
        if (path==="./homepage.png") {
            return (
                <>
                    <button type="button"
                            data-bs-target={`#${project.value}_card`}
                            data-bs-slide-to={index}
                            className="active"
                            aria-current="true"
                            aria-label={`${project} ${index}`}></button>
                </>
            )
        } else return (
            <>
                <button type="button"
                        data-bs-target={`#${project.value}_card`}
                        data-bs-slide-to={index}
                        aria-label={`${project} ${index}`}></button>
            </>
        )
    }

    const image = (project, path, index) => {
        if (path==="./homepage.png") {
            return (
                <>
                    <div className="carousel-item active">
                        <img
                            src={`${imagesPath}/${project.value}/${path}`}
                            className="d-block img-fluid" alt="..."/>
                    </div>
                </>
            )
        } else return (
            <>
                <div className="carousel-item">
                    <img
                        src={`${imagesPath}/${project.value}/${path}`}
                        className="d-block img-fluid" alt="..."/>
                </div>
            </>
        )
    }

    return (
        <div className="rounded-3 p-3 mb-3"
             style={{height: "100%", backgroundColor: "rgba(0,0,0,0.2)"}}>
            <div style={{height: "100%"}}>
                <div className="row p-2" style={{height: "100%",overflowY: "auto"}}>
                    {/*side*/}
                    <div className="col-3 text-center p-2" style={{backgroundColor: "rgba(255,255,255,0.2)"}}>
                        <h1 style={{color: "white",overflowY:"auto"}}>Projects</h1>
                        <div id="simple-list-example"
                             className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center border-top pt-2">
                            {projects && projects.sort((a, b) => {
                                return b.finishedDate - a.finishedDate
                            }).map((project, index) => (
                                <a className="p-1 rounded btn text-white"
                                   href={`#${project.value}`}>{project.title}</a>
                            ))}
                        </div>
                    </div>
                    {/*content*/}
                    <div className="col-9" style={{height: "100%", overflowY: "auto"}}>
                        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                             data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0"
                             style={{height: "100%"}}
                        >
                            {/*card*/}
                            {projects && projects.sort((a, b) => {
                                return b.finishedDate - a.finishedDate
                            }).map((project, index) => (
                                <>
                                    {/*card*/}
                                    <div
                                        className="card mb-3 text-white background-image: var(--bs-gradient) data-mdb-attribute w-100"
                                        style={{height: "100%", backgroundColor: "rgba(0,0,0,0.3)"}}
                                        id={`${project.value}`}>
                                        {/*capture part*/}
                                        <div id={`${project.value}_card`} className="carousel slide pt-3 w-100 "
                                             data-bs-ride="true" >
                                            {/*pagination*/}
                                            <div className="carousel-indicators mb-0"
                                                 style={{backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"10px"}}>
                                                {project.capture && project.capture.map((path, index) => {
                                                    return button(project, path, index)
                                                })}
                                            </div>
                                            {/*capture*/}
                                            <div className="d-flex justify-content-center ">
                                                <div className="carousel-inner "
                                                     style={{width: "70%",height:"50vh", overflowY: "auto",}}>
                                                    {project.capture && project.capture.map((path, index) => {
                                                        return image(project, path, index)
                                                    })}
                                                </div>
                                            </div>
                                            {/*prev & next btn*/}
                                            <button className="carousel-control-prev" type="button"
                                                    data-bs-target={`#${project.value}_card`}
                                                    data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon"
                                                                  style={{backgroundColor:"rgba(0,0,0,0.2)",height:"5vh",borderRadius:"10px"}}
                                                                  aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>

                                            <button className="carousel-control-next" type="button"
                                                    data-bs-target={`#${project.value}_card`}
                                                    data-bs-slide="next">
                                                            <span className="carousel-control-next-icon"
                                                                  style={{backgroundColor:"rgba(0,0,0,0.2)",height:"5vh",borderRadius:"10px"}}
                                                                  aria-hidden="true"></span>
                                                <span className="visually-hidden" >Next</span>
                                            </button>
                                        </div>
                                        {/*card body => text*/}
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
            </div>
        </div>
    );
};

export default ProjectList;