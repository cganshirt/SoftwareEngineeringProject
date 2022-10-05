import React,{useState,useEffect,Component,Fragment} from 'react'
import "./elist.css";

function Elist(){
 const [elist,setelist] = useState([]);
 let web = document.location.href;
 const te = web.split("/");
 let manager = te[4];
 let ab = manager.split("#")[0];
 function handleget(){        
    fetch('http://localhost:3000/employees/'+ab)
    .then(response => {
        
        if (response.ok) {
          return response.json();
          
        } else {
          throw new Error('Something went wrong ...');
        }
      })
     .then(data =>{
         let temp = [];
        for (let i in data.list) {
         let dataTemp = [data.list[i].id,data.list[i].first_name,data.list[i].last_name,data.list[i].email];
         temp.push(dataTemp);
        
            }
            setelist(temp);

        }
      );
      }

      useEffect(() => {
        handleget();
      }, []);
      
      return (
          <>

{
                          elist.map((element,index)=>{
                              
                          return (
                          <>
                           <li>Employee id : {element[0]} | Full name: {element[1]} {element[2]}</li>
                                  
                         </>);
                              
                          
                          })
                      }
</>);
  
}
export default Elist;