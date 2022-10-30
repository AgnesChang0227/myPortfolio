import React from 'react';
import "../app.css"

const Footer = () => {
    return (
        <div className=" text-center p-3 text-white w-100"
             style={{zIndex:"1",height:"50px",backgroundColor:"#5346ec",
                 position:"fixed",bottom:"0",marginTop:"500px"}}>
            © 2022 Copyright:  AgnesChang
        </div>
    );
};

export default Footer;