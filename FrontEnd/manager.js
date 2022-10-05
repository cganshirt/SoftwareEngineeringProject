
import React,{Component,Fragment} from 'react'
import logo from './ukg_logo.png';
import "./App.css";
import "./hpage.css";
import PTO from "./PTO";

function Manager(){
    // const [isclickfromlist, click_set_true] = useState(false);
    // this.displayData = [];
    // this.handleChange = this.handleChange.bind(this);
   
return (
      <div className="Page">
  <div className="Navbar">
    <div className="logoImage">
      <img className="logo"
        src={logo}
        alt='UKG Icon'></img>
    </div>
    <div className="middle">
    <a class="button" href="#popup1" id="asst"><center>Assign Training</center></a>
    <a class="button" href="#popup2" id="list"><center>Employee List</center></a>
    <a class="button" href="#popup3" id="review"><center>Write Review</center></a>
    </div>

    <div classname='TypeOfPage'>
    <h3><center>MANAGER ACCOUNT</center></h3>
    </div>
    <div class="dropdown">
  <a class="user-button">DanielBarskiy</a>
  {/* <a class ="button"><center></center></a> */}
  <div class="dropdown-content">
    <a href="#">32221178</a>
    <a href = 'http://localhost:3000/'> Logout </a>
    {/* <a href="#">Link 3</a> */}
  </div>
</div>
    {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}
    
      <div id="popup1" class="overlay">
	     <div class="popup">
	     <h2><center>BOX</center></h2>
		   <a class="close" href="#">&times;</a>
		    <div class="content">
            <label for="fname">Train to: </label>
            <input type="text" id="lable1" name="mylable"></input><br></br>
            <p></p>
            <label for="fname">Link: </label>
            <input type="text" id="lable2" name="lable2"></input><br></br>

            <div className="button-container">
            <input type="submit" value="Submit"/>
            </div>
	      </div>
	    </div>
    
</div>

      <div id="popup2" class="overlay">
	      <div class="popup">
		    <h2><center>BOX</center></h2>
		    <a class="close" href="#">&times;</a>
		      <div class="content">
            <div className="elist">

                </div>
	          </div>
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



 




  <div className="CONT">
    <PTO/>
      
    <div className="ATbox">
    <div className="astboxed"><h2> Assigned Training:</h2></div>
    <div className="asstlist"> </div>
    </div>
    </div>
  </div>
  
  );
}


export default Manager;