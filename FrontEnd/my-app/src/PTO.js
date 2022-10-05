import React,{useState,useEffect,Component,Fragment} from 'react'
import "./App.css";
import "./hpage.css";
function PTO() {
    const [ptolist, setptolist] = useState([]);
    let web = document.location.href;
    const te = web.split("/");
    let manager = te[4];
    let ab = manager.split("#")[0];
    let id = parseInt(ab);
    let url = 'http://localhost:3000/pto/manager/'+ab;
    useEffect(() => {
        // TODO: Call Database API to get database info
        handleget();
      }, []);
    function handleget(){
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
             let dataTemp = [data.list[i].id,data.list[i].emp_id,data.list[i].type,data.list[i].additional_info,data.list[i].start_date,data.list[i].end_date,data.list[i].approved,data.list[i].manager_id];
             //0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
                temp.push(dataTemp);
                }
                setptolist(temp);
            }
          );
          }
    function clickhandle_approve(e){
        let text = e.target.value;
        const myArray = text.split(",");
        //0.id, 1.emp_id, 2.type, 3.additional_info,
        //4.start, 5.end 6.approved, 7.manager_id
        fetch('http://localhost:3000/pto/', {
      method: 'PUT',
      body: JSON.stringify({
        id: myArray[0],
        approved: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      console.log('tes');
      handleget();
    })
      }
      function clickhandle_deny(e){
        let text = e.target.value;
        const myArray = text.split(",");
        //0.id, 1.emp_id, 2.type, 3.additional_info,
        //4.start, 5.end 6.approved, 7.manager_id
        let id = myArray[0];
        console.log(id);
        fetch('http://localhost:3000/pto/', {
      method: 'PUT',
      body: JSON.stringify({
        id: myArray[0],
        approved: 2

      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
            handleget();
    })
      }
return (<div className="PTObox">
    <div className="ptoboxed">
    <h2> PTO Requests:</h2></div>
<div className="ptolist">
                    {
                        ptolist.map((element,index)=>{
//0.id, 1.emp_id, 2.type, 3.additional_info, 4.start, 5.end 6.approved, 7.manager_id
                        return (
                        <>
                          <div className="PTO_component">
        <div className="PTO-TEXT">

        <p1>From Employee : {element[1]}</p1>
        <br/>
        <p1>Type : {element[2]}</p1>
        <br/>
        <p1>Start Date : {element[4]}</p1>
        <br/>
        <p1>End Date : {element[5]}</p1>
        <br/>
        <p1>Additional Info : {element[3]}</p1>
        <br/>
        <p1>Statue : Undecided</p1>

        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button" value={[element[0],element[1],element[2],element[3],element[4],element[5],element[6]]} onClick={clickhandle_approve}>Approve</button>
        <button type="button" id="PTO-DENY-button" value={[element[0],element[1],element[2],element[3],element[4],element[5],element[6]]} onClick={clickhandle_deny}>Deny</button>
        </div>
      </div>
                                </>);
                        })
                    }
</div>
</div>
);
}
export default PTO;