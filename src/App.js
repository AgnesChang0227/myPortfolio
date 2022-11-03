import React from "react";
import {projects} from "./config/project"

import ProjectList from "./components/ProjectList"
import Header from "./components/Header"
import Resume from "./components/resume"

import "./app.css"


function App() {
    //for taking the img's pathname inside the folder
    // function importAll(r) {
    //     //// Use these line if you like to access arrays using an integer index.
    //     let images = [];
    //     r.keys().map((item, index) => {
    //         // console.log(item);
    //         images.push(item);
    //     });
    //     return images;
    // }
    //
    // const images = importAll(require.context(`../public/images/photoWebsite`, false, /\.(png|jpe?g|svg)$/));
    // console.log(images);
    return (
        <div className="col-12 d-flex justify-content-center align-items-center"
             style={{
                 backgroundImage: "url(./images/bg.jpg)",
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
