import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import ProjectList from "./pages/ProjectList";

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/aboutMe" element={<AboutMe/>}/>
                    <Route path="/projects" element={<ProjectList/>}/>
                    <Route path="/project/:title" element={<Project/>}/>
                    <Route path="/*" element={<Page404/>}/>
                </Routes>

            <Footer/>
        </>
    );
}

export default App;
