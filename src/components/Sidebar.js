import React from 'react';

const imagesPath = process.env.PUBLIC_URL + "/images";

const Sidebar = () => {
  return (
    <div className=" p-3 fixed-top mx-auto border-bottom navbar navbar-expand-lg navbar-light"
         style={{
           backgroundColor: "rgba(0,0,0,0.2)",
           width: "90vw", height: "6vh", display: "flex",
         }}>
      <div className="collapse navbar-collapse d-flex justify-content-between align-items-center " id="navbarSupportedContent"
      style={{color:"#fff"}}>
        {/*right side*/}
        <ul className="navbar-nav mr-auto flex-row" >
          <li className="nav-item px-2">
            <a className="nav-link " href="#about">About Me</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#project">Projects</a>
          </li>
          {/*<li className="nav-item px-2">*/}
          {/*  <a className="nav-link " href="#resume">Resume</a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;