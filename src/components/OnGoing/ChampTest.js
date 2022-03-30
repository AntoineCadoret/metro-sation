import React, { useState } from "react";
import './AffichageMot.css';

const ChampTest = ({parentCallback, ...props}) => {
//  const [lettre, setLettre] = useState('');

 const changerLettre = (texte) =>{
    // const lettre = document.querySelector('.lettre').value;
    console.log(lettre);
    const lettre = texte;
    document.querySelector('.lettre').value = "";
 };
  return (
    <div> 
      <input 
      onChange={(lettreInput) => changerLettre(lettreInput)} 
      className="lettre" type="text" maxLength='1' ></input>
      {/* onClick={()=>essai(lettre)} */}
    </div>
  );
};

export default ChampTest;
