import React from "react";
import Navbar from "./Navbar";
import ToDoList from "./todolist";
import "./main.css";
import { useLocation } from 'react-router-dom';

function Main() {
    let location = useLocation();
    console.log(location.state);//state.id 
    return(
        <div>
            <Navbar/>
            <div className="CONT"> 
                <div className="todolist">
                <ToDoList/>
                </div>
            </div>

        </div>
    );
}

export default Main;
