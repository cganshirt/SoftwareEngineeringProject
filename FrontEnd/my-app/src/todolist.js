
import React,{useState,useEffect,Component,Fragment} from 'react'
import "./todolist.css";








function ToDoList() {
  const [todolist,settodolist] = useState([]);
  const [performance,setperformanceData] = useState([]);
  let web = document.location.href;
  const te = web.split("/");
  let manager = te[4];
  let ab = manager.split("#")[0];
  let num_id = parseInt(ab);
    
  useEffect(() => {
    // TODO: Call Database API to get database info
    getTODO();
    getPerformance();
  }, []);
  
  function getPerformance(){
    let url = 'http://localhost:3000/performance/';

    fetch(url)//
      .then(response => {
          if (response.ok) {
            console.log('it runs');
            return response.json();
          } else {
              console.log('doesn t fetch')
              throw new Error('Something went wrong ...');
          }
        })
       .then(data =>{
           let temp = [];
          for (let i in data.list) {
            if(data.list[i].to_employee == num_id){
              let dataTemp = [data.list[i].id,data.list[i].from_employee,data.list[i].status];
              //0.id,1.from_employee,2.status
              temp.push(dataTemp);
              }
            }
              setperformanceData(temp);
          }
        );
        
  }
  
  function getTODO(){
    let url = 'http://localhost:3000/assignedtraining/'+ab;
    console.log('it runs');
    fetch(url)//
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
              let dataTemp = [data.list[i].id,data.list[i].training_link,data.list[i].start_date,data.list[i].end_date,data.list[i].completed,data.list[i].manager_id];
              //0.id,1.training_link,2.start_date,3.end_date,4.completed,5.manager_id
              temp.push(dataTemp);
              }
              settodolist(temp);
          }
        );
  }

  function tocomplete(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/assignedtraining/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        completed: 2
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getTODO();
    })
  }

  function tocomplete_review(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/performance/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        status: 2
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getPerformance();
    })
  }
  function toInProgress_review(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/performance/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        status: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getPerformance();
    })
  }
  function toNotStarted_review(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/performance/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        status: 0
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getPerformance();
    })
  }

  function toInProgress(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/assignedtraining/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        completed: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getTODO();
    })
  }
  
  function toNotStarted(e) {
    let id = e.target.value;
    fetch(' http://localhost:3000/assignedtraining/', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        completed: 0
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      getTODO();
    })
  }

  return (
    <div className="BigBox">
      {/* <div className="TitleBox">
        <h1>To-Do List</h1>
      </div> */}
      <div className="IPtitlebox">
        <h2>In-Progress Tasks:</h2>
      </div>
      <div className="IPlist">
        <div className="IPitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">

                {todolist.map((element,index)=>{
                //0.id,1.training_link,2.start_date,3.end_date,4.completed,5.manager_id
                if(element[4] == 1) { 
                return(
                    <>
                  <li class="list-group-item-IP">
                    <div classname='TypeOfPage'>
                      <todoh3>Train Link :<a href={element[1]}>{element[1]}</a> | Requester(id): {element[5]}| Start Date: {element[2]} | End Date: {element[3]}</todoh3>
                    </div>

                    
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress}>In-Progress</button>
                        <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted}>Not Started</button>
                        <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete}>Completed</button>
                      </div>
                    </div>
                  </li>
                  </>
                  )
                }})}

                {performance.map((element,index)=>{
                  //0.id,1.from_employee,2.status
                  if(element[2]==1){
               return(
                 <>
               <li class="list-group-item-IP">
                 <div classname='TypeOfPage'>
                 <todoh3> You are writting the peer review for the employee with id: "{element[1]}. After writting, please change the status as Completed.</todoh3>
                 </div>

                 
                 <div class="tododropdown">
                   <a class="todouser-button">Status</a>
                   <div class="tododropdown-content">
                     <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress_review}>In-Progress</button>
                     <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted_review}>Not Started</button>
                     <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete_review}>Completed</button>
                   </div>
                 </div>
               </li>
               </>
               )
                }})
               }  




                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="NStitlebox">
        <h2>Not Started Tasks:</h2>
      </div>
      <div className="NSlist">
        <div className="NSitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
              
                  {todolist.map((element,index)=>{
                //0.id,1.training_link,2.start_date,3.end_date,4.completed,5.manager_id
                  if(element[4]==0){
                  return(
                    <>
                  <li class="list-group-item-NS">
                    <div classname='TypeOfPage'>
                    <todoh3>Train Link :<a href={element[1]}>{element[1]}</a> | Requester(id): {element[5]}| Start Date: {element[2]} | End Date: {element[3]}</todoh3>
                    </div>

                    
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress}>In-Progress</button>
                        <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted}>Not Started</button>
                        <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete}>Completed</button>
                      </div>
                    </div>
                  </li>
                  </>
                  )
                }})}
                {performance.map((element,index)=>{
                  //0.id,1.from_employee,2.status
                  if(element[2]==0){
               return(
                 <>
               <li class="list-group-item-NS">
                 <div classname='TypeOfPage'>
                 <todoh3> Peer Review Request from {element[1]}. You can write review by click the button on the top of the page. </todoh3>
                 </div>

                 
                 <div class="tododropdown">
                   <a class="todouser-button">Status</a>
                   <div class="tododropdown-content">
                     <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress_review}>In-Progress</button>
                     <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted_review}>Not Started</button>
                     <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete_review}>Completed</button>
                   </div>
                 </div>
               </li>
               </>
               )
                }})
               }

                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="Ctitlebox">
        <h2>Completed Tasks:</h2>
      </div>
      <div className="Clist">
        <div className="Citem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">

                  {todolist.map((element,index)=>{
                    if(element[4]==2){
                //0.id,1.training_link,2.start_date,3.end_date,4.completed,5.manager_id
                  return(
                    <>
                  <li class="list-group-item-C">
                    <div classname='TypeOfPage'>
                    <todoh3>Train Link :<a href={element[1]}>{element[1]}</a> | Requester(id): {element[5]}| Start Date: {element[2]} | End Date: {element[3]}</todoh3>
                    </div>

                    
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress}>In-Progress</button>
                        <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted}>Not Started</button>
                        <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete}>Completed</button>
                      </div>
                    </div>
                  </li>
                  </>
                  )
                  }})
                  }
                   {performance.map((element,index)=>{
                     //0.id,1.from_employee,2.status
                     if(element[2]==2){
                  return(
                    <>
                  <li class="list-group-item-C">
                    <div classname='TypeOfPage'>
                    <todoh3> You have finished the Peer Review form employee with id "{element[1]}". Thank you so much!</todoh3>
                    </div>

                    
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" value={element[0]} onClick={toInProgress_review}>In-Progress</button>
                        <button type="button" class="NSbutton" value={element[0]} onClick={toNotStarted_review}>Not Started</button>
                        <button type="button" class="Cbutton" value={element[0]} onClick={tocomplete_review}>Completed</button>
                      </div>
                    </div>
                  </li>
                  </>
                  )
                   }})
                  }

                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;

//Peer Eval Request Template
                    // <div classname='TypeOfPage'>
                    //   <todoh3>Task: Peer Eval</todoh3>
                    // </div>
                    // <div classname='Requester'>
                    //   <h4>Requester: Sean Darras</h4>
                    // </div>
                    // <div class="tododropdown">
                    //   <a class="todouser-button">Status</a>
                    //   <div class="tododropdown-content">
                    //     <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                    //     <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                    //     <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                    //   </div>
                    // </div>

//Training Template
                    // <div classname='TypeOfPage'>
                    //   <todoh3>Task: Training</todoh3>
                    // </div>
                    // <div classname='link'>
                    //   <h4>Link: </h4>
                    //   <url><a href='http://localhost:3000/main/4321/training1'>Training 1</a></url>
                    // </div>
                    // <div class="tododropdown">
                    //   <a class="todouser-button">Status</a>
                    //   <div class="tododropdown-content">
                    //     <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                    //     <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                    //     <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                    //   </div>
                    // </div>