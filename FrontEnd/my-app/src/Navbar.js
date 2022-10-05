import React, { useState, useEffect } from "react";
import logo from "./ukg_logo.png";
import "./App.css";
// import { useState } from 'react';
import axios from 'axios'
import {App,App2} from "./username_db";

function Navbar() {
  let web = document.location.href;
  const te = web.split("/");
  let employee = te[4];
  let ab = employee.split("#")[0];
  let url = 'http://localhost:3000/pto/employee/'+ab;
  let b = parseInt(ab);


  const [myreview, setmyreview] = useState([]);
  const [mypto, setmypto] = useState([]);
  const [managerID, setmanagerID] = useState("");
  const [formdataPTO, setformdataPTO] = useState({emp_id: ab, manager_id: "", type:"", start_date:"", end_date:"", additional_info:"", approved: 0});
  const [performanceData, setperformanceData] = useState({from_employee: "", to_employee: ab, delivery: "", kindness: "", growth: "", comments: "", status : 2});
  const [performanceData2, setperformanceData2] = useState({from_employee: ab, to_employee: 0, delivery: 0, kindness: 0, growth: 0, comments: "", status : 0});
  useEffect(() => {
    // TODO: Call Database API to get database info
    handleget();
    handleget_review();
  }, []);

  function handleget(){
    fetch(url)//
    .then(response => {
        if (response.ok) {
          console.log('PTO list for emplpyee');
          return response.json();
        } else {
            console.log('doesn t fetch')
          throw new Error('Something went wrong ...');
        }
      })
     .then(data =>{
         let temp = [];
        for (let i in data.list) {
       
          let dataTemp = [data.list[i].id,data.list[i].emp_id,data.list[i].type,data.list[i].additional_info,data.list[i].start_date,data.list[i].end_date,data.list[i].approved,data.list[i].manager_id];
          //0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id

            temp.push(dataTemp);
            
          }
            setmypto(temp);
        }
      );
      console.log(mypto);
      }
      function handleget_review(){
        fetch('http://localhost:3000/performance/')
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
                console.log('doesn t fetch')
              throw new Error('Something went wrong ...');
            }
          })
         .then(data =>{
             let temp = [];
            for (let i in data.list) {
              if(data.list[i].from_employee == b && data.list[i].status ==2){
             let dataTemp = [data.list[i].id,data.list[i].from_employee,data.list[i].status,data.list[i].comments,data.list[i].growth,data.list[i].kindness,data.list[i].delivery];
             //0.id,1.from_employee,2.status,3.comments,4.growth,5.kindness,6.delivery
   
             temp.push(dataTemp);
                }
              }
                setmyreview(temp);
                console.log(myreview[0]);
            }
          );
          }
  
  
  useEffect(() => {
    async function getManagerID(){
      const res = await axios.get('http://localhost:3000/employees/'+ab);
      setmanagerID(res.data.list[0].manager_id);
    }
    if(managerID === ""){
      getManagerID();
    }
    else{
      setformdataPTO({...formdataPTO,manager_id:managerID});
    }
  }, [managerID]);
  
  
  async function handleSubmit(){
    console.log(formdataPTO);
    const res = await axios.post('http://localhost:3000/pto/', formdataPTO)
    console.log(res)
  }

  async function handlePerformaceSubmit(){
    console.log(performanceData);
    const res = await axios.post('http://localhost:3000/performance/', performanceData)
    console.log(res)
  }

  async function handlePerformaceSubmit2(){
    console.log(performanceData2);
    const res = await axios.post('http://localhost:3000/performance/', performanceData2)
    console.log(res)
  }

  return (
    <div className="Navbar">
      <div className="logoImage">
        <img className="logo" src={logo} alt="UKG Icon"></img>
      </div>
      <div className="middle">
        <a class="button" href="#popup1">
          <center>Request Peer Eval</center>
        </a>
        <a class="button" href="#popup2">
          <center>Request PTO</center>
        </a>
        <a class="button" href="#popup3" id="review">
          <center>Write Review</center>
        </a>
        <a class="button" href="#popup5" id="inbox">
          <center>Inbox</center>
        </a>
      </div>
      <div classname="TypeOfPage">
        {/* <a class="button" href="#popup4" id="logout">Logout</a> */}
        {/* <h3>AHHHH </h3> */}

        <h3> EMPLOYEE ACCOUNT </h3>
      </div>

      <div class="dropdown">
        <a class="user-button">
          {" "}
          <App />
        </a>
        {/* <a class ="button"><center></center></a> */}
        <div class="dropdown-content">
          
          <a href="http://localhost:3000/"> Logout </a>
          {/* <a href="#">Logout</a> */}
          {/* <a href="#">Link 3</a> */}
        </div>
      </div>
    {/* <div classname='TypeOfPage'> */}
    {/* <a class="button" href="#popup4" id="logout">Logout</a> */}
    {/* <h3>AHHHH </h3> */}
    {/* <p> EMPLOYEE ACCOUNT </p> */}
    {/* </div> */}
  <div class="dropdown">
  <a class="user-button"> <App/></a>
  {/* <a class ="button"><center></center></a> */}
  <div class="dropdown-content">
    <a href="#"> User ID: <App2/> </a>
    <a href = 'http://localhost:3001/'> Logout </a>
    {/* <a href="#">Logout</a> */}
    {/* <a href="#">Link 3</a> */}
  </div>
</div>
      {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}
                <div id="popup5" class="overlay">
        <div class="popup">
        <h2><center>PTO Request and Peer Review</center></h2>
        <a class="close" href="#">&times;</a>
          <div class="content">
            <div className="pplist">
            

            {mypto.map((element,index)=>{
//0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
                        
                  if(element[6]==0){
                          return (
                                 <>
                                 <ul class="list1 responsive green-checkmarks">
                         Type:{element[2]} | Status: Undecided
                         </ul>
                                </>);}
                  if(element[6]==1)
                  return (
                         <>
                         <ul class="list1 responsive green-checkmarks">
                 Type:{element[2]} | Status: Approved
                 </ul>
                        </>);
                        if(element[6]==2)
                        return (
                               <>
                               <ul class="list1 responsive green-checkmarks">
                       Type:{element[2]} | Status: Denied
                       </ul>
                              </>);
                        })
                    }


            
                </div>

                <div className="pplist">

                {myreview.map((element,index)=>{
          //0.id,1.from_employee,2.status,3.comments,4.growth,5.kindness,6.delivery
                        
         
                          return (
                                 <>
                                 <ul class="list1 responsive green-checkmarks">
                                From employee with id:{element[1]}<br/>
                                Comments: {element[3]}<br/>
                                Growth: {element[4]}<br/>
                                Kindness: {element[5]}<br/>
                                Delivery: {element[6]}<br/>
                                ————————————————

                         </ul>
                                </>);
                        })
                    }

                </div>
            </div>
          </div>
      </div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <a class="close" href="#">
            &times;
          </a>
          <div class="popup-header">
            <h2>
              <center>Request Peer Evaluation</center>
            </h2>
          </div>
          <div class="popup-body">
            <label for="fname">Request To: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setperformanceData2({...performanceData2, to_employee : e.target.value})}}></input>
            <br></br>
          </div>
          <div className="button-container">
            <input type="submit" value="Submit" onClick={handlePerformaceSubmit2}/>
          </div>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
      <div id="popup2" class="overlay">
        <div class="popup">
          <h2>
            <center>PTO Request</center>
          </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <label for="fname">Type: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setformdataPTO({...formdataPTO, type : e.target.value})}} ></input>
            <br></br>
            <p></p>
          </div>
          <div class="popup-body">
            <label for="sdate">Start Date: </label>
            <input type="date" id="sdate" name="sdate" onChange={(e)=>{setformdataPTO({...formdataPTO, start_date : e.target.value})}}></input>
            <br></br>
          </div>
          <div class="popup-body">
            <label for="edate">End Date: </label>
            <input type="date" id="edate" name="edate" onChange={(e)=>{setformdataPTO({...formdataPTO, end_date : e.target.value})}}></input>
            <br></br>
          </div>
          <div class="popup-body">
            <label for="comments">Additional Comments(Optional): </label>
            <input type="text" id="comments" name="comments" onChange={(e)=>{setformdataPTO({...formdataPTO, additional_info : e.target.value})}}></input>
            <br></br>
          </div>
          <div className="button-container">
            <input type="submit" value="Submit" onClick={handleSubmit}/>
          </div>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
      <div id="popup3" class="overlay">
        <div class="popup">
          <h2>
            <center>Performance Review</center>
          </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <label for="fname">Send To: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setperformanceData({...performanceData, from_employee : e.target.value})}}></input>
            <br></br>
            <p></p>
            <label for="fname">Growth Feedback: </label>
            <ul class="likert">
              <li> None </li>
              <li>
                <input type="radio" name="growth" value="1" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="2" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="3" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="4" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="5" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li> A lot </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Kindness Feedback: </label>
            <ul class="likert">
              <li> None </li>
              <li>
                <input type="radio" name="kind" value="1" onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="2"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="3"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="4"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="5"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li> Very </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Delivery Feedback: </label>
            <ul class="likert">
              <li> Needs Improvement </li>
              <li>
                <input type="radio" name="delivery" value="1"  onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="2" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="3" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="4" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="5" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li> Very Well </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Overall Feedback: </label>
            <textarea
              id="rev-desc"
              name="rev-desc"
              rows="5"
              cols="47"
              onChange={(e)=>{setperformanceData({...performanceData, comments : e.target.value})}}
            ></textarea>
            <div className="button-container">
              <input type="submit" value="Submit" onClick={handlePerformaceSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;