import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isAnswered, setIsAnswered] = React.useState(false);
  function handleUpdateGuess(guessInput) {
    let nextGuesses = [...guesses];
    let checkedGuess = checkGuess(guessInput, answer);

    let isOk = true;
    checkedGuess.map((checked) => {
      if (checked.status !== "correct") {
        isOk = false;
      }
    });
    setIsAnswered(isOk);

    nextGuesses.push({
      id: crypto.randomUUID(),
      label: guessInput,
      checkedGuess: checkedGuess,
    });
    setGuesses(nextGuesses);
    console.log("answer", answer, checkedGuess, isAnswered);
  }

  return (
    <>
      {isAnswered && (
        <Banner type={"happy"} numOfGuesses={guesses.length} answer={answer} />
      )}
      {!isAnswered && guesses.length === 6 && (
        <Banner type={"sad"} numOfGuesses={guesses.length} answer={answer} />
      )}
      <GuessResults guesses={guesses} />
      <GuessInput
        handleUpdateGuess={handleUpdateGuess}
        disable={isAnswered || (!isAnswered && guesses.length === 6)}
      />
    </>
  );
}

export default Game;
