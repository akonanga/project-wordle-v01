import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <>
      {range(1, 6).map((col, colNdx) => (
        <span
          key={colNdx}
          className={`cell ${guess && guess.checkedGuess[colNdx].status}`}
        >
          {guess ? guess.label[colNdx] : ""}
        </span>
      ))}
    </>
  );
}

export default Guess;
