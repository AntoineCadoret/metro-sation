import React from "react";
import './AffichageMot.css';

const AffichageMot = (props) => {
  return (
    <div>
      <p className="motCache">{props.motCache}</p>
    </div>
  );
};

export default AffichageMot;