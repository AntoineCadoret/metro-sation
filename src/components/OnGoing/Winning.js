import React from "react";

const Winning = (props) => {
    return (
        <div>
            <h3>Féliciation!</h3>
            <p> Vous avez trouvé le mot caché qui était <strong>{props.motChoisi}</strong>!</p>
        </div>
    );
};
export default Winning;