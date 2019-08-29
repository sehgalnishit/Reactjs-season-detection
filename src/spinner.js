import React from 'react';

const Spinner=()=>{
return(
  <div className="ui active dimmer">
    <div className="ui large text loader"> <p>Please allow to know your location</p></div>
    <br/>
    <p>Loading</p>
  </div>


    // <p>please allow the permission to see your location to continue!!</p>
)
}

export default Spinner;