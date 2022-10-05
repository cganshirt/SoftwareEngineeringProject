import React,{useState, useEffect} from 'react'
import logo from './ukg_logo.png';
import "./App.css";
import "./elist.css";
import "./hpage.css";
import PTO from "./PTO";
import Elist from './emp_list';
import {App,App2} from "./username_db";
import axios from 'axios'


function Manager(){
    let web = document.location.href;
    const te = web.split("/");
    let manager = te[4];
    let ab = manager.split("#")[0];
    var b = parseInt(ab);
    const [performanceData, setperformanceData] = useState({from_employee: ab, to_employee: "", delivery: "", kindness: "", growth: "", comments: ""});
    
    async function handlePerformaceSubmit(){
      console.log(performanceData);
      const res = await axios.post('http://localhost:3000/performance/', performanceData)
      console.log(res)
    }
    const[as_to, setas_to] = useState('');
    const[as_url, setas_url] = useState('');
    const[ATlist,setATlist] = useState([]);
    const[start_date,set_start_date]= useState('');
    const[end_date,set_end_date]= useState('');
    const[id,set_id]=useState(0);
    useEffect(() => {
      // TODO: Call Database API to get database info
      GetATbox();
    }, []);


    function GetATbox() {
      let url = 'http://localhost:3000/assignedtraining/';
   
      fetch(url)//
        .then(response => {
            if (response.ok) {
              console.log('ATbox runs');
              return response.json();
            } else {
                console.log('doesn t fetch')
                throw new Error('Something went wrong ...');
            }
          })
         .then(data =>{
             let temp = [];
            for (let i in data.list) {
              if(data.list[i].manager_id == b){
                let dataTemp = [data.list[i].emp_id,data.list[i].training_link,data.list[i].start_date,data.list[i].end_date,data.list[i].completed,];
                set_id(i);
                temp.push(dataTemp);
              }
                }
                setATlist(temp);
            }
          );
    }
    const assign_handle = (event) => {
      event.preventDefault();
      //POST for ATlist
      const te = as_to.split(",");
      for(let i in te){
        te[i]=parseInt(te[i]);
      }
      
      function isNum(n) {
        return !isNaN(n/0);
        }

   
      //console.log(isNum(te[0]));
      fetch('http://localhost:3000/assignedtraining/', {
      method: 'POST',
      body: JSON.stringify({
        emp_ids: te,
        attributes: {
                manager_id: b,
                training_link: as_url,
                additional_info:'',
                start_date: start_date,
                end_date: end_date,
                completed:0
        }
    }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      if(response.ok){  
        console.log('assign run');
        GetATbox();
    } else{
      throw new Error('Something went wrong ...');
    }
      });
 
    }
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
    <div classname="TypeOfPage">
          <h3>
            <center>MANAGER ACCOUNT</center>
          </h3>
        </div>
        <div class="dropdown">
          <a class="user-button"><App/></a>
          {/* <a class ="button"><center></center></a> */}
          <div class="dropdown-content">
            <a href="#">User ID: <App2/></a>
            <a href="http://localhost:3001/"> Logout </a>
            {/* <a href="#">Link 3</a> */}
          </div>
        </div>


      <div id="popup1" class="overlay">
       <div class="popup">
       <h2><center>Assign Training</center></h2>
       <a class="close" href="#">&times;</a>
        <div class="content">
        <form onSubmit={assign_handle}>
            <label for="fname">Train to: </label>
            <input type="text" id="lable1" name="mylable" onChange={e => setas_to(e.target.value)}/><br></br>
            <p></p>
            <label for="fname">Link: </label>
            <input type="text" id="lable2" name="lable2"  onChange={e => setas_url(e.target.value)}/><br></br>
            <p></p>
            <label for="fname">Start date: </label>
            <input type="text" id="lable3" name="lable3"  onChange={e => set_start_date(e.target.value)}/><br></br>
            <p></p>
            <label for="fname">End date: </label>
            <input type="text" id="lable4" name="lable4"  onChange={e => set_end_date(e.target.value)}/><br></br>
            <div className="button-container">
            <input type="submit" value="Submit" />
            </div>
            </form>
        </div>
      </div>
</div>
      <div id="popup2" class="overlay">
        <div class="popup">
        <h2><center>Employee List</center></h2>
        <a class="close" href="#">&times;</a>
          <div class="content">
            <div className="elist">
            <ul class="list1 responsive green-checkmarks">
            <Elist/>
            </ul>
                </div>
            </div>
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
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setperformanceData({...performanceData, to_employee : e.target.value})}}></input>
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
      <div className="CONT">
        <PTO />
        <div className="ATbox">
          <div className="astboxed">
            <h2> Assigned Training:</h2>
          </div>
          <div className="asstlist">
          {
                          ATlist.map((element,index)=>{
                          //[0.emp_id,1.training_link,2.start_date,3.end_date,4.completed,];
                          if(element[4] == 0){
                          return (
                          <>
                          <div className="ATlist_not_start">
                              <p><h6>Sent to : <br/>
                              <div className='element'>{element[0]}</div></h6></p>
                              <p></p><p></p>
                             <p><h6>Train link : <br/> <div className='element'>{element[1]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Start date :  <br/><div className='element'>{element[2]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>End date : <br/> <div className='element'>{element[3]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Status : <br/> <div className='element'>Not Started</div></h6></p>
                           </div>
                                  </>);
                          }
                          else if(element[4] == 1){
                            return (
                            <>
                             <div className="ATlist_Progress">
                             <p><h6>Sent to : <br/><div className='element'>{element[0]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Train link : <br/><div className='element'>{element[1]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Start date : <br/><div className='element'>{element[2]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>End date : <br/><div className='element'>{element[3]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Status : <br/><div className='element'>In Progress</div></h6></p>
                           </div>
                                    </>);
                            }
                            else{
                              return (
                              <>
                               <div className="ATlist_finish">
                               <p><h6>Sent to :  <br/><div className='element'>{element[0]}</div></h6></p>
                               <p></p><p></p>
                             <p><h6>Train link :  <br/><div className='element'>{element[1]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Start date : <br/><div className='element'> {element[2]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>End date :  <br/><div className='element'>{element[3]}</div></h6></p>
                             <p></p><p></p>
                             <p><h6>Status : <br/> <div className='element'>Finished</div></h6></p>
                             </div>
                                      </>);
                              }
                          })
                      }
          </div>
        </div>
      </div>
    </div>
  );
}
export default Manager;