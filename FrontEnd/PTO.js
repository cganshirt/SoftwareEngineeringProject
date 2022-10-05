
import React,{Component,Fragment} from 'react'
import "./App.css";
import "./hpage.css";

class PTO extends Component{
    constructor(props){ 
        super(props) 
        this.state = {
            inputValue:"", 
            list:[["babe","mine"],""] 
        }
    }
render(){return (<div className="PTObox">
<div className="ptoboxed"><h2> PTO Requests:</h2></div>
<div className="ptolist"> 
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                        return (
                        <><li>{item[0]}</li>
                          <li>{item[1]}</li>
                                </>);
                            
                        
                        })
                    }
                </ul>
</div>
</div>
);
}
}
export default PTO;