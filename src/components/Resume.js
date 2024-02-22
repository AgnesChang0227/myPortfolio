import React from 'react';

const imagesPath = process.env.PUBLIC_URL + "/images";

const Resume = ({id}) => {
  return (
    <div className=" p-3 mb-3 h-100" id={id}
         style={{backgroundColor: "rgba(255,255,255,0.2)",borderRadius:"20px"}}>
      <div className="row p-2" style={{height: "100%",overflowY: "auto"}}>
        <div className="col-3 p-2  "
             style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
          <div className="d-flex justify-content-center">
            <h1 className="text-light">
              Resume
            </h1>
            <a className="p-1 rounded btn nav-link"
               href='https://drive.google.com/file/d/1TBD_xAj4xiPTuqvEBuO1-BTYYQHoGeNr/view?usp=drive_link'
               rel='opener noreferrer'
               target='_blank'
            >
              <i className="h1 bi bi-file-earmark-arrow-down px-2"/>
            </a>
          </div>

        </div>
        <div className="col-9" style={{height: "100%", overflowY: "auto"}}>
          <img className="border" style={{borderRadius: "15px", width: "100%"}}
               src={imagesPath + "/resume.png"} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Resume;