import React, {useRef, useState} from 'react';
import {projects} from "../config/project";
import {Link, useNavigate} from "react-router-dom";
import "../app.css";

const ProjectList = () => {
    const navigate = useNavigate();
    const top = useRef(null);
    const [active, setActive] = useState(false);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: "smooth", block: "center"});
    }

    const button = (project, path, index) => {
        // console.log(path)
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
                            src={`./images/${project.value}/${path}`}
                            className="d-block img-fluid" alt="..."/>
                    </div>
                </>
            )
        } else return (
            <>
                <div className="carousel-item">
                    <img
                        src={`./images/${project.value}/${path}`}
                        className="d-block img-fluid" alt="..."/>
                </div>
            </>
        )
    }

    return (
        <div className="rounded-3 p-3 mb-3"
             style={{height: "auto", backgroundColor: "rgba(0,0,0,0.2)"}}>
            <div>
                <div className="row p-2">
                    <h1 style={{color: "white"}}>Projects</h1>
                    {/*side*/}
                    <div className="col-3 text-center p-2" style={{backgroundColor: "rgba(255,255,255,0.2)"}}>
                        <div id="simple-list-example"
                             className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                            {projects && projects.sort((a, b) => {
                                return b.finishedDate - a.finishedDate
                            }).map((project, index) => (
                                <a className="p-1 rounded btn text-white"
                                   href={`#${project.value}`}>{project.title}</a>
                            ))}
                        </div>
                    </div>
                    {/*content*/}
                    <div className="col-9" style={{height: "80vh", overflowY: "auto"}}>
                        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                             data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0"
                        >
                            {/*card*/}
                            {projects && projects.sort((a, b) => {
                                return b.finishedDate - a.finishedDate
                            }).map((project, index) => (
                                <>
                                    <div
                                        className="card mb-3 text-white background-image: var(--bs-gradient) data-mdb-attribute"
                                        style={{width: "100%", backgroundColor: "rgba(0,0,0,0.3)"}}
                                        id={`${project.value}`}>
                                        <div id={`${project.value}_card`} className="carousel slide"
                                             data-bs-ride="true">
                                            <div className="carousel-indicators"
                                                 style={{backgroundColor:"rgba(0,0,0,0.2)",borderRadius:"10px"}}>
                                                {project.capture && project.capture.map((path, index) => {
                                                    return button(project, path, index)
                                                })}
                                            </div>
                                            <div className="carousel-inner justify-content-center"
                                                 style={{minHeight:"auto",maxHeight: "60vh", overflowY: "auto"}}>
                                                {project.capture && project.capture.map((path, index) => {
                                                    return image(project, path, index)
                                                })}
                                            </div>

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