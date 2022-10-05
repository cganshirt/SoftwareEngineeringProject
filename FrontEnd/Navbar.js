import React, {useState,useEffect} from "react";
import logo from './ukg_logo.png';
import "./App.css";
// import { useState } from 'react';
// import App from "./username_db";
import { App, App2 } from "./username_db"

function Navbar() {
  return (
    
  <div className="Navbar">
    <div className="logoImage">
      <img className="logo"
        src={logo}
        alt='UKG Icon'></img>
    </div>

    <div className="middle">
    <a class="button" href="#popup1"><center>Request Peer Eval</center></a>
    <a class="button" href="#popup2"><center>Request PTO</center></a>
    <a class="button" href="#popup3" id="review"><center>Write Review</center></a>
    </div>

    <div classname='TypeOfPage'>
    {/* <a class="button" href="#popup4" id="logout">Logout</a> */}
    {/* <h3>AHHHH </h3> */}
   
    <h3> EMPLOYEE ACCOUNT </h3>
    
    </div>
    
  <div class="dropdown">
  <a class="user-button"> <App/> </a>
  {/* <a class ="button"><center></center></a> */}
  <div class="dropdown-content">
    <a href="#"> Employee ID: <App2/> </a>
    <a href = 'http://localhost:3000/'> Logout </a>
    {/* <a href="#">Logout</a> */}
    {/* <a href="#">Link 3</a> */}
  </div>
</div>

    {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}
    <div id="popup1" class="overlay">
	<div class="popup">
  <h2><center>Peer Eval Request</center></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
        <label for="fname">Manager Name: </label>
        <input type="text" id="lable1" name="mylable"></input><br></br>
        <p></p>
        </div>

    <div class = "popup-header">
      <h2>Request Performance Review</h2>
    </div>
    <div class = "popup-body">
      <label for="fname">Request To: </label>
      <input type="text" id="fname" name="fname"></input><br></br>
    </div>
    <div className = "submit-button">
          <input type="submit-perf-rev" value="Submit"/>
    </div>
		<a class="close" href="#">&times;</a>
	</div>
</div>


<div id="popup2" class="overlay">
	<div class="popup">
  <h2><center>PTO Request</center></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
        <label for="fname">Type: </label>
        <input type="text" id="lable1" name="mylable"></input><br></br>
        <p></p>
        </div>

    <div class = "popup-body">
      <label for="sdate">Start Date: </label>
      <input type="date" id="sdate" name="sdate"></input><br></br>
    </div>
    <div class = "popup-body">
      <label for="edate">End Date: </label>
      <input type="date" id="edate" name="edate"></input><br></br>
    </div>
    <div class = "popup-body">
      <label for="comments">Additional Comments(Optional): </label>
      <input type="text" id="comments" name="comments"></input><br></br>
    </div>
    <div className="button-container">
            <input type="submit" value="Submit"/>
          </div>
		<a class="close" href="#">&times;</a>
	</div>
</div>

<div id="popup3" class="overlay">
    <div class="popup">
		<h2><center>Performance Review</center></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
        <label for="fname">Send To: </label>
        <input type="text" id="lable1" name="mylable"></input><br></br>
        <p></p>
        <label for="fname">Growth Feedback: </label>
        <ul class="likert">
           <li> A lot </li>
            <li><input type="radio" name="growth" value="1" /></li>
             <li><input type="radio" name="growth" value="2" /></li>
             <li><input type="radio" name="growth" value="3" /></li>
             <li><input type="radio" name="growth" value="4" /></li>
            <li><input type="radio" name="growth" value="5" /></li>
         <li> None </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Kindness Feedback: </label>
        <ul class="likert">
           <li> Very </li>
            <li><input type="radio" name="kind" value="1" /></li>
             <li><input type="radio" name="kind" value="2" /></li>
             <li><input type="radio" name="kind" value="3" /></li>
             <li><input type="radio" name="kind" value="4" /></li>
            <li><input type="radio" name="kind" value="5" /></li>
         <li> None </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Delivery Feedback: </label>
        <ul class="likert">
           <li> Very Well </li>
            <li><input type="radio" name="delivery" value="1" /></li>
             <li><input type="radio" name="delivery" value="2" /></li>
             <li><input type="radio" name="delivery" value="3" /></li>
             <li><input type="radio" name="delivery" value="4" /></li>
            <li><input type="radio" name="delivery" value="5" /></li>
         <li> Needs Improvement </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Overall Feedback: </label>
        <textarea id = "rev-desc" name="rev-desc" rows="5" cols= "47"></textarea>
        <div className="button-container">
            <input type="submit" value="Submit"/>
          </div>
		</div>
	</div>
      </div>

  </div>
  );
}

export default Navbar;