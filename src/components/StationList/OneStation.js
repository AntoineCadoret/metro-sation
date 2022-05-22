import React, {useState} from "react";

const OneStation = (props) =>{
    const checkStation = () =>{
        props.firstCallback(props.station);
    }
    return <div>
        <h4>{props.station.station_name}</h4>
        <img></img>
        <button onClick={()=>checkStation()}>En savoir plus</button>
    </div>
}

export default OneStation;