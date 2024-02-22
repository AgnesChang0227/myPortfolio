import React from "react";
import {projects} from "./config/project"

import ProjectList from "./components/ProjectList"
import About from "./components/About"
import Resume from "./components/Resume"
import Sidebar from "./components/Sidebar"

import "./app.css"

const imagesPath = process.env.PUBLIC_URL + "/images";

function App() {
  return (
    //background
    <div className="col-12 d-flex justify-content-center align-items-center"
         style={{
           backgroundImage: `url(${imagesPath}/bg.jpg)`,
           backgroundPosition: "center", backgroundSize: "cover", height: "100vh"
         }}>
      {/*navbar*/}
      <Sidebar/>
      {/*content*/}
      <div className="p-3 "
           style={{
             backgroundColor: "rgba(255,255,255,0.25)", width: "90vw", height: "85vh",
             border: "solid 1px transparent", borderRadius: "15px", overflowY: "auto"
           }}>
        <About/>
        <ProjectList/>
        {/*<Resume/>*/}
      </div>

    </div>
  )
}

export default App;
