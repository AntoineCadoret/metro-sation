import React, { useState } from "react";
import { InputGroup, FormControl, Input } from "react-bootstrap";

import AffichageMot from "./AffichageMot";
import LettreErroner from "./LettreErroner";
import GameOver from "./GameOver";
import ChampTest from "./ChampTest";
import Winning from "./Winning";

import "./OnGoing.css";
const OnGoing = (props) => {
  const [isGoing, setIsGoing] = useState(true);
  const [motCache, setMotCache] = useState(props.motCache);
  const [lettreManquer, setLettreManquer] = useState("");
  const [nombreEssai, setNombreEssai] = useState(7);
  const [nombreTrouver, setNombreTrouver] = useState(0);
  const [isEliminated, setIsEliminated] = useState(false);
  const [haveWon, setHaveWon] = useState(false);

  const essai = () => {
    const lettre = document.querySelector(".champLettre").value;
    console.log(lettre);
    let motChoisi = props.motChoisi;
    let motTrouver = "";
    let lettreDejaEssaye = lettreManquer;
    let trouver = false;
    let nbTrouver = nombreTrouver;
    let nombreLettreEssayer = nombreEssai;
    console.log(motChoisi);
    for (let intpos = 0; intpos < motChoisi.length; intpos++) {
      console.log(motChoisi[intpos]);
      if (lettre == motChoisi[intpos]) {
        console.log("good");
        motTrouver += lettre;
        trouver = true;
        nbTrouver++;
      } else {
        console.log("not good");
        if (motCache[intpos] != "_") {
          motTrouver += motCache[intpos];
        } else {
          motTrouver += "_";
        }
      }
    }
    if (!trouver) {
      lettreDejaEssaye += lettre;
      setLettreManquer(lettreDejaEssaye);
      nombreLettreEssayer--;
      setNombreEssai(nombreLettreEssayer);
    }
    if (nombreLettreEssayer == 0) {
      setIsEliminated(true);
      setIsGoing(false);
    }
    if (nbTrouver == motCache.length) {
      setIsGoing(false);
      setHaveWon(true);
    }
    setNombreTrouver(nbTrouver);
    setMotCache(motTrouver);
    document.querySelector(".champLettre").value = "";
  };
  //   const handleCallback = (childData) => {
  //     this.setState({ data: childData });
  //   };

  return (
    <div>
      <h2>Il vous reste {nombreEssai} chances</h2>
      {isGoing && (
        <div>
          <AffichageMot motCache={motCache} />
          <LettreErroner lettreEssayer={lettreManquer} />
          <input
            className="champLettre"
            placeholder=""
            onChange={essai}
            autoFocus
          />
        </div>
      )}
      {isEliminated && <GameOver motChoisi={props.motChoisi} />}
      {haveWon && <Winning motChoisi={props.motChoisi} />}
    </div>
  );
};

export default OnGoing;
// Appuyer sur la lettre que vous voulez essayer
{
  /* <ChampTest parentCallback={this.handleCallback} /> */
}
{
  /* essai={essai.bind()} */
}
