import React from "react";

const status = {
  happy:
    "<p>" +
    "<strong>Congratulations!</strong> Got it in" +
    "<strong><status_numOfGuesses> guesses</strong>." +
    "</p>",
  sad: "<p>Sorry, the correct answer is <strong><status_answer></strong>.</p>",
};

function Banner({ type, numOfGuesses, answer }) {
  return (
    <div className={`${type} banner`}>
      {type === "happy" && (
        <p>
          <strong>Congratulations</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      )}
      {type === "sad" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
