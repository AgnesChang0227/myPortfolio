import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Page404 = () => {
    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>404Page</h1>
            <br/>
            <h2>Oops! The page doesn't exist!</h2>
            <br/>
            <Link to="/"> Route Me to Homepage</Link>
        </div>
    );
};

export default Page404;