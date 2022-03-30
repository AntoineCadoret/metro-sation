import React, { useState } from 'react';
import Beginning from "./components/Beginning/Beginning";
import OnGoing from './components/OnGoing/OnGoing';

const App = () => {
  const [motChoisi, setMotChoisi] = useState("");
  const [motCache, setMotCache] = useState("");
  const arrMots = ["pomme","banane","liqueur","travail","delicieux","couteau", "fourchette","pied", "foudre", "ordinateur"];
  const [isBeginning, setIsBeginning] = useState(true);
  const [isGoing, setIsGoing] = useState(false);
  const begin = () => {
    let cache = "";
    const intMotChoisi = Math.floor(Math.random()*9);
    let choisi = arrMots[intMotChoisi];
    const intLengthMot = choisi.length;
    for(let intLoop=0; intLoop<intLengthMot; intLoop++){
        cache = cache + "_";
    }
    console.log(intLengthMot);
    
    setMotCache(cache);
    setMotChoisi(choisi);
    console.log(cache);
    setIsBeginning(false);
    setIsGoing(true);
  };
  return (
    <div>
      <h1>Bonhomme Pendu</h1>
      {isBeginning && (<Beginning begin={()=>begin()}/> )}
     
      {isGoing && (<OnGoing motChoisi={motChoisi} motCache={motCache}/>)}
    </div>
  );
}

export default App;
