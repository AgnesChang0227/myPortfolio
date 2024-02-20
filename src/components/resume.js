import React from 'react';

const Resume = () => {
    return (
        <div className="text-center p-3 mb-3"
             style={{backgroundColor: "rgba(255,255,255,0.2)",borderRadius:"20px"}}>
            <div className="text-start">
                <h1 className="text-gray">Resume</h1>
            </div>
            <div style={{height: "auto", backgroundColor: "rgba(0,0,0,0.2)"}}>
                <img className="border" style={{borderRadius: "15px", width: "100%"}}
                     src="./images/resume.png" alt=""/>
            </div>

        </div>
    );
};

export default Resume;