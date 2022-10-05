import React from "react";
import Navbar from "./Navbar";
import RequestStatus from "./requeststatus";
import ToDoList from "./todolist";
import "./main.css";
import App from "./username_db";





function Main() {
    return(
        <div>
            <Navbar/>
            <div className="CONT"> 
                <div className="todolist">
                <ToDoList/>
                {/* <App/> */}
                {/* <p>userDB</p> */}
                </div>
                {/* <div className="reqstatus">
                <RequestStatus/>
                </div> */}
            </div>
        </div>
    );
}

export default Main;
