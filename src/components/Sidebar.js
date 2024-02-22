import React from 'react';

const imagesPath = process.env.PUBLIC_URL + "/images";

const Sidebar = () => {
  return (
    <div className=" p-3 fixed-top mx-auto border-bottom navbar navbar-expand-lg navbar-light"
         style={{
           backgroundColor: "rgba(255,255,255,0.1)",
           width: "90vw", height: "6vh", display: "flex", overflowX: "auto", overflowY: "hidden",
         }}>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent"
      style={{color:"#fff"}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link " href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Contract</a>
          </li>
          <li className="nav-item">
            <img
              src={imagesPath + "/icon.jpeg"}
              className="rounded-circle" style={{height: "5vh"}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;