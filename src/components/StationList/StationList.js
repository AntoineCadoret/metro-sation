import React, { useEffect, useState } from "react";
import OneStation from "./OneStation";

const StationList = ({ stations }, props) => {
  let [listStations, setListStations] = useState([]);

  useEffect(() => {
    setListStations(stations);
    // listOfStation = stations;
  }, []);
 
    const ordreAlphabetiqueDecroissant = () => {
        let sortedData = [...listStations].sort((a,b)=>{
            return a["station_name"]>b["station_name"]? -1:1
        });
        console.log(sortedData);
        setListStations(sortedData);
    };

    const ordeAlphabetiqueCroissant = () => {
     let sortedData = [...listStations].sort((a,b)=>{
          return a["station_name"]>b["station_name"]? 1:-1
      });
      setListStations(sortedData);
    };

    const ordeAnneeCroissant = () => {
      let sortedData = [...listStations].sort((a,b)=>{
           return a["year_opened"]>b["year_opened"]? 1:-1
       });
       console.log(sortedData);
       setListStations(sortedData);
     };
    const firstCallback = (chosenStation) => {
      props.handleCallback(chosenStation);
    };  

  return (
    <div>
      <p>filtres</p>
      <div>
        <button onClick={ordeAlphabetiqueCroissant}>A-Z</button>
        <button onClick={ordreAlphabetiqueDecroissant}>Z-A</button>
        <button onClick={ordeAnneeCroissant}>Année croissante</button>
          {/* <button>Année décroissante</button> */}
          {/* <button>station Souterraine</button> */}
          {/* <button>station extérieur</button> */}
      </div>
      <h3>Liste des stations:</h3>
      {listStations.map((station) => {
        return (
          <OneStation
            key={station.id}
            station={station}
            firstCallback={firstCallback}
          />
        );
      })}
    </div>
  );
};

export default StationList;
