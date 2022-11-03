import React from 'react';

const Header = () => {
    return (
        <div className="rounded-3 text-center p-3 mb-3"
             style={{height: "auto", backgroundColor: "rgba(255,255,255,0.2)"}}>
            <img src="./images/icon.jpg" className="rounded-circle"
                 style={{height: "20vh"}}/>
            <h1 style={{color: "#fff"}}>Agnes Chang</h1>
            <h4 style={{color: "#fff"}}>Web developer</h4>
            <h6 style={{color: "#fff"}}>
                <i className="bi bi-envelope-check-fill" style={{fontSize: "16px"}}> </i>
                agneschang0227@gmail.com
            </h6>
            <br/>
            <div className="text-start p-3 text-white rounded-3"
                 style={{height: "auto", backgroundColor: "rgba(0,0,0,0.2)"}}>
                <h5>About Me</h5>
                <p style={{marginBottom: "0px"}}>Hello, I'm Agnes. Welcome to my portfolio website! </p>
                <p style={{marginBottom: "0px"}}>
                    I was quit my clerk job in 2022 Feb and start learning different technology skiils.
                    And I spent 2 months to self-learning in Java then take the course of backend web developter
                    in ERB about 3 months.
                </p>
                <p style={{marginBottom: "0px"}}>Now I want to show you the projects I haven done or practise
                    before.</p>
                <p style={{marginBottom: "0px"}}>Welcome to send advice to me and thank you for your
                    patience!</p>
            </div>
        </div>
    );
};

export default Header;