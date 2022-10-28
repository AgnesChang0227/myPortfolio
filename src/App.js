import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
