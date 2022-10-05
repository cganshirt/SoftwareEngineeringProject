import React, { useState, useEffect } from 'react';


//   fetch(url2, {
//   // mode: 'no-cors',
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//   },
// },
// ).then(response => {
//   if (response.ok) {
//     response.json().then
//     (json => {
//       console.log(json);
//     });
//   }
// }).catch(error => { console.log('request failed', error); }); // Syntax error: unexpected end of input;
    // fetch(url2,{
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   // mode: 'no-cors', // no-cors, *cors, same-origin
    //   headers: { 'Content-Type': 'application/json',    'Accept': 'application/json'}

    //   // cache: 'no-cache' })
    // })
    //   .then(response => {
    //     if(response.status === 200){
    //       console.log("Success!!!!",response.status);
    //       console.log("Type of",response);
    //       // console.log("REsponse.json:",response.json());
    //       return response
    //     // return JSON.stringify(response.body())
    //     }
    //     else if (response.json.length==0) {
    //       console.log("no data found");
    //   }
    //     else{
    //       console.log('Incorrect response status:',response.json());
    //     }
    //   })
    //   .then(data => {
      const App = () => {
        const [currentUser, setCurrentUser] = useState(null);
        const url1 = "https://api.adviceslip.com/advice";
        
        const url2 = "http://localhost:3000/";
        const url3 = "http://127.0.0.1:3000/employees/1";
        const fetchData = () => {
      fetch(url3).then(response => { 
        return response.json().catch(err => {
          console.error(`'${err}' happened, but no big deal!`);
          return {};
        });
      }).then(data => {
        // console.log(data); 
        // console.log("Made it here @");
         let obj = JSON.stringify(data);
        // setCurrentUser(data.slip.advice)
        // id = data.slip.id;
        // console.log("OBJ Output:",obj);
        setCurrentUser(data.list.first_name);
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
  const [currentID, setID] = useState(null);
  const url1 = "https://api.adviceslip.com/advice";
  
  const url2 = "http://localhost:3000/";
  const url3 = "http://127.0.0.1:3000/employees/1";
  const fetchData = () => {
fetch(url3).then(response => { 
  return response.json().catch(err => {
    console.error(`'${err}' happened, but no big deal!`);
    return {};
  });
}).then(data => {
  // console.log(data); 
  // console.log("Made it here @");
   let obj = JSON.stringify(data);
  // setCurrentUser(data.slip.advice)
  // id = data.slip.id;
  // console.log("OBJ Output:",obj);
  setID(data.list.id);
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

export  {App2};
// const id =,id 3;

// export  {App,id};
// export var obj;

// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [currentUser, setUser] = useState("");
//     const fetchData = async() => {
//         // const url = "https://localhost:3000/employee/1";
//         const url ="https://api.adviceslip.com/advice";
//         try {
//             const data = await fetch(url);
//             const json = await data.json();
//             console.log(json.slip.advice);
//             setUser(data);

//         } catch (error) {
//             console.log("error", error);
//         }
//     };
// //     // fetch("https://localhost:3000/employee/1")
// //     fetch("https://api.adviceslip.com/advice")
// //       .then(response => {
// //         return response.json()
// //       })
// //       .then(data => {
// //         setCurrentUser(response.slip.advice)
// //       })
// //   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//         <p>{currentUser}</p>
//   );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [advice, setAdvice] = useState("");

//     useEffect(() => {
//         const url = "https://api.adviceslip.com/advice";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json.slip.advice);
//                 setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//             <p>{advice}</p>
//     );
// };
// export default App;


// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [advice, setAdvice] = useState("");

//     useEffect(() => {
//         const url = "https://api.adviceslip.com/advice";
//         const url2 = "http://localhost:3000/employees/2"

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url2);
//                 const json = await response.json();
//                 // JSON.stringify(obj)
//                 // console.log(json.slip.advice);
//                 // setAdvice(json.slip.advice);
//                 // console.log("JSON EMAIL",json['email']);
//                 // setAdvice(json['email']);
//                 setAdvice(JSON.stringify(json));
//                 // setAdvice("hi")
//                 // setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//         {/* <p>holde2r {holder}</p> */}
//             <p>Advice: {advice}</p></div>
//     );
// };

// export default App;
