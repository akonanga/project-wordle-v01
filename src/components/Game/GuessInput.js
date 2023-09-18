import React from "react";
function GuessInput({ handleUpdateGuess, disable }) {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdateGuess(guessInput.toLocaleUpperCase());
          setGuessInput("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={disable}
          value={guessInput}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(event) => {
            setGuessInput(event.target.value.toLocaleUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
