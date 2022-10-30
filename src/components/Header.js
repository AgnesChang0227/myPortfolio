import React from 'react';

const headerCSS = {
    backgroundImage:"url(./myPortfolio/images/bg.jpg)",
    height:"20vh",width:"100vw",display:"flex",
    alignItems:"center",justifyContent:"center"
}
const Header = () => {
    return (
        <>
            <div style={headerCSS}>
                <i style={{margin:"0 auto",color:"#5d315a",fontFamily:"fantasy",fontSize:"36px"}}>
                    Agnes Chang's Portfolio
                    <div style={{fontSize:"14px",position:"relative",left:"20vw"}}>
                        <i className="bi bi-envelope-check-fill" style={{fontSize:"16px"}}> </i>
                        Email: agneschang0227@gmail.com
                    </div>
                </i>
            </div>
        </>
    );
};

export default Header;