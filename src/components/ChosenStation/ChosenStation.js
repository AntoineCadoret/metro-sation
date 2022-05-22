import React, {useState} from "react";
import "./ChosenStation.css";

const ChosenStation = ({ station }) => {
    return (
      <div>
        <h3>Station : {station.station_name}</h3>
        {/* <img/> */}
        <h4>Ligne désservant la station :</h4>
        <p>{station.line_number.map((metroLine, index) => 
          (<span key={index} className="line" id={'line'+metroLine}>{metroLine} </span>)
          )}
        </p>
        {/* <h4>Voici les attractions aux alentours de la station</h4>
        <ul>
            {props.station.attractions.map((attraction) => (
            <li>{attraction}</li>))}
        </ul> */}
      </div>
    );
  }
  
  export default ChosenStation;