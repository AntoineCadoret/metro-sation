import React from "react";

const GameOver = (props) => {
    return (
        <div>
            <h3>Game Over!</h3>
            <p>Désolé! Vous avez perdu!</p>
            <p>Le mot cherché était <strong>{props.motChoisi}</strong></p>
        </div>
    );
};
export default GameOver;