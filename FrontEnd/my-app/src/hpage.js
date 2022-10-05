import React, { useState } from "react";

import "./hpage.css";

function Home() {

  return (

    <div className="Bigbox">
      <div className="titlebox">
        <h1>  To Do List</h1>
      </div>
      <div className="progboxed">
        <h2> In Progress Tasks:</h2>
      </div>
      <div className="proglist"> </div>
      <p></p>
      <div className="notstartboxed">
        <h2> Not Started Tasks:</h2>
      </div>
      <div className='notstartlist'> </div>
      <p></p>
      <div className="completedboxed">
        <h2> Completed Tasks:</h2>
      </div>
      <div className='completedlist'> </div>
    </div>
  );
}

export default Home;
