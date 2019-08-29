import React from 'react';
import './SeasonDisplay.css';
var seasonDecider={
    winter:{
    season_image:"snowflake",
    season_text:"its cold mean!"
    },

    summer:{
    season_image:"sun",
    season_text:"its sunny bero!!"
    }
};

var getSeason=function(lat,month){
if(month>2 && month<9)
{
    return lat >0 ? 'summer':'winter'
}
else
{
    return lat > 0 ? "winter" : "summer"
}
};
// console.log(one);
// const season_icon=seasonDecider.image1;
const SeasonPredict=(props)=>{
const season=getSeason(props.lat,new Date().getMonth());
const{season_image,season_text}=seasonDecider[season]

return(
        <div className={`season_text ${season}`}>
            {/* <p>{season}</p>
            <p>the value of latitiute is:{props.lat}</p>
            <p>the value of longititude is:{props.lon}</p>
            <br/> */}           
            {/* <p>its <b>{season}</b> enjoy yourself</p> */}
            {/* understand the use of " ` " operator */}
            <i className={`top-left-icon massive ${season_image} icon`}/>          
            <h1 >{season_text}</h1>
            <i className={`bottom-right-icon massive ${season_image} icon`}/>
        </div>
       )
}
export default SeasonPredict