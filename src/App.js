import React from "react";
import {projects} from "./config/project"

import ProjectList from "./components/ProjectList"
import Header from "./components/Header"
import Resume from "./components/resume"


import "./app.css"

const imagesPath = process.env.PUBLIC_URL+"/images";

function App() {
    return (
        <div className="col-12 d-flex justify-content-center align-items-center"
             style={{
                 backgroundImage: `url(${imagesPath}/bg.jpg)`,
                 backgroundPosition: "center", backgroundSize: "cover", height: "100vh"
             }}>
            <div className="p-3 "
                 style={{
                     backgroundColor: "rgba(255,255,255,0.25)", width: "90vw", height: "90vh",
                     border: "solid 1px transparent", borderRadius: "15px", overflowY: "auto"
                 }}>
                <Header/>
                <ProjectList/>
                <Resume/>
            </div>
        </div>
    )
}

export default App;
