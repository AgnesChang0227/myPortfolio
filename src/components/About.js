import React from "react"

const imagesPath = process.env.PUBLIC_URL + "/images";

const About = () => {
  return (
    <div
      className="rounded-3 text-center p-3 mb-3"
      style={{minHeight: "100%"}}
    >
      <img
        src={imagesPath + "/icon.jpeg"}
        className="rounded-circle"
        style={{height: "20vh"}}
      />
      <h1 style={{color: "#fff"}}>Chang, Yuen Yi (Agnes)</h1>
      <h4 style={{color: "#fff"}}>Web developer</h4>
      <h6 style={{color: "#fff"}}>
        <i className="bi bi-envelope-open-fill"/>
        <a className="ms-2" href="www.google.com">agneschang0227@gmail.com</a>

      </h6>
      <br/>
      <div
        className="text-start p-3 text-white rounded-3"
        style={{height: "auto", backgroundColor: "rgba(0,0,0,0.2)"}}
      >
        <h5>About Me</h5>
        <p style={{marginBottom: "0px"}}>
          Hello, I'm Agnes. Welcome to my portfolio website!{" "}
        </p>
        <p style={{marginBottom: "0px"}}>
          I made the decision to leave my clerk job in February 2022 and venture
          into a new path of acquiring diverse technology skills. With great
          determination, I devoted two months to self-learning Java, laying a
          solid foundation. Subsequently, I enrolled in a three-month web
          development course at ERB, honing my skills further.
        </p>
        <p style={{marginBottom: "0px"}}>
          To provide you with a better understanding of my capabilities, I have
          attached my previous project and resume. I hope these resources prove
          to be helpful in assessing my abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
