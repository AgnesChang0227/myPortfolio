import React from 'react';

const ProjectCard = ({project}) => {

    return (
        <>
            <div className="card mb-3 w-75 bg-dark text-white background-image: var(--bs-gradient)" id="simple-list-item-1">
                <img src={`./${process.env.REACT_APP_REPO ||''}images/owlSchool.png`}
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <br/>
        </>
    );
};

export default ProjectCard;