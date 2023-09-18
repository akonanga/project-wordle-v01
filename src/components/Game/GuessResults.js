import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range, sample } from "../../utils";
import Guess from "./Guess";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(1, NUM_OF_GUESSES_ALLOWED + 1).map((row, rowNdx) => (
        <p className="guess" key={rowNdx}>
          <Guess guess={guesses[rowNdx]} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
