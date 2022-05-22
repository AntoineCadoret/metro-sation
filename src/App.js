import React, { useState } from "react";
import ChosenStation from "./components/ChosenStation/ChosenStation";
import StationList from "./components/StationList/StationList";
import { stationData } from "./MOCK_DATA";

const App = () => {
  // vars de state
  const [showStationList, setShowStationList] = useState(false);
  const [randomChosen, setRandomChosen] = useState("");

  const showRandomStation = () => {
    setShowStationList(false);
    let randomNumber = Math.floor(Math.random() * stationData.length);

    setRandomChosen(stationData[randomNumber]);

    console.log(randomNumber);
  };

  const handleCallback = (chosenStation) => {
    setShowStationList(false);
    setRandomChosen(chosenStation);
  };
  
  return (
    <div>
      <header>
        <h1>Freego</h1>
        <h2>Vous ne savez pas où aller dans Paris?</h2>
        <p>Cliquez et découvrez par quelle station du métro parisien passer!</p>
      </header>

      <button onClick={() => showRandomStation()}>Choisir une station</button>
      <button onClick={() => setShowStationList(!showStationList)}>
        Je veux voir toutes les stations de la ville
      </button>
      {randomChosen !== "" && <ChosenStation station={randomChosen} />}
      {showStationList && (
        <StationList stations={stationData} handleCallback={handleCallback} />
      )}
    </div>
  );
};

export default App;
