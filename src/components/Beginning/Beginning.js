import React from "react";

const Beginning = (props) => {
  const{begin}=props;
  return (
    <div>
      <p>Vous avez jusqu'à 7 erreurs pour trouver le mot caché!</p>
      <p>Pour débuter la partie, cliquer sur commencer!</p>
      <button onClick={begin}>Commencer</button>
    </div>
  );
};

export default Beginning;
