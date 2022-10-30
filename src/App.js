import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Resume from  "./pages/resume";
import ProjectList from "./pages/ProjectList";
import Sidebar from "./components/Sidebar";
import React, {useState} from "react";

import "./app.css"

function App() {
    // const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <body >
            <Sidebar />
            <section className="home">
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/aboutMe" element={<AboutMe/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/projects" element={<ProjectList/>}/>
                    <Route path="/project/:value" element={<Project/>}/>
                    <Route path="/*" element={<Page404/>}/>
                </Routes>
            </section>
            {/*<Footer/>*/}
            </body>
        </div>
    );
    // );
}

export default App;
