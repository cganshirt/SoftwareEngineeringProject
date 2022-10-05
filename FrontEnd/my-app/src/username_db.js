import React, { useState, useEffect } from 'react';
var id=0;
const App = () => {
const [currentUser, setCurrentUser] = useState(null);
const url = "https://api.adviceslip.com/advice";
const url2 = "http://localhost:3000/employees/2";
const fetchData = () => {
    fetch(url2)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // setCurrentUser(data)
        // data = JObject.Parse(json)["id"].ToString();
        // let obj = JSON.stringify(data);
        // const obj = JSON.parse(data).ToString();
        // console.log("************",obj);
        setCurrentUser(data.list.first_name)
        // id = data.slip.id;
        // setCurrentUser()
        // setCurrentUser(obj.slip.advice);
      })
  }
useEffect(() => {
    fetchData()
  }, [])
  return (
    // <div>
   <p> {currentUser}</p>
        // {/* <p>User Name:</p> */}
      // <p>{currentUser}</p>
    // </div>
  );
};
export {App};
const App2 = () => {
  const [currentID, setCurrentID] = useState(null);
  const url = "https://api.adviceslip.com/advice";
  const url2 = "http://localhost:3000/employees/2";
  const fetchData = () => {
      fetch(url2)
        .then(response => {
          return response.json()
        })
        .then(data => {
          // setCurrentUser(data)
          // data = JObject.Parse(json)["id"].ToString();
          // let obj = JSON.stringify(data);
          // const obj = JSON.parse(data).ToString();
          // console.log("************",obj);
          setCurrentID(data.list.id)
          // id = data.slip.id;
          // setCurrentUser()
          // setCurrentUser(obj.slip.advice);
        })
    }
  useEffect(() => {
      fetchData()
    }, [])
    return (
      // <div>
     <p> {currentID}</p>
          // {/* <p>User Name:</p> */}
        // <p>{currentUser}</p>
      // </div>
    );
  };
  export {App2};