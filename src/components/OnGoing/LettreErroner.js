import React from "react";
import './LettreErroner.css';


const LettreErroner = (props) => {
  return (
    <div>
      <h3>Lettre Éronné:</h3>
      <p className="lettreEssayer">{props.lettreEssayer}</p>
    </div>
  );
};

export default LettreErroner;