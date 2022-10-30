import React from 'react';


const ProjectList = () => {
    const reader = new FileReader();
    console.log()
    return (
        <div>
            <div className="row">
                <div className="col-2 bg-dark position-sticky top-0" style={{height: "100vh", paddingTop: "70px"}}>
                    <div id="simple-list-example"
                         className="d-flex flex-column gap-2 simple-list-example-scrollspy">
                        <a className=" w-100 rounded btn btn-secondary btn-sm" href="/myPortfolio#/projects/#simple-list-item-1">Item 1</a>
\                    </div>
                </div>
                <div className="col-10">
                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
                         data-bs-smooth-scroll="true" className="scrollspy-example justify-center" tabIndex="0">
                        <div className="card mb-3 w-75 bg-dark text-white background-image: var(--bs-gradient)"
                             id="simple-list-item-1">
                            {/*<img  src={`./${process.env.REACT_APP_REPO ||''}${project.captureFolder}/homepage.png`}*/}
                            <img  src={`./${process.env.REACT_APP_REPO ||''}images/owlSchool.png`}
                                 className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;