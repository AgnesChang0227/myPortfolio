import React from 'react';

const Sidebar = () => {
  return (
    <div className=" p-3 fixed-top mx-auto border-bottom"
         style={{
           width: "90vw", height: "6vh", display: "flex", overflowX: "auto", overflowY: "hidden",
         }}>
      <a href="#">About</a>
      <a href="#">Project</a>
    </div>
  );
};

export default Sidebar;