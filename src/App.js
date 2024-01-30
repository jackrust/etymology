import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const wordsList = [
  {
    "word": "Squander",
    "meaning": "To waste in a reckless or foolish manner.",
    "etymology": "Derived from the Latin word '______', meaning 'to square out,' suggesting the idea of scattering money."
  },
  {
    "word": "Labyrinth",
    "meaning": "A complex and confusing arrangement or course of winding passages.",
    "etymology": "From the Greek myth of the Minotaur and the maze created by Daedalus, where '______' means 'double axe,' and '______' means 'place.'"
  },
  {
    "word": "Garrulous",
    "meaning": "Excessively talkative, especially on trivial matters.",
    "etymology": "From the Latin word '______', meaning 'talkative' or 'chattering.'"
  },
  {
    "word": "Quixotic",
    "meaning": "Exceedingly idealistic; unrealistic and impractical.",
    "etymology": "Derived from the character Don Quixote in Miguel de Cervantes' novel, known for his chivalrous but impractical ideals."
  },
  {
    "word": "Serendipity",
    "meaning": "The occurrence and development of events by chance in a happy or beneficial way.",
    "etymology": "Coined by Horace Walpole from the Persian fairy tale 'The Three Princes of Serendip,' where the princes make discoveries by accident."
  },
  {
    "word": "Peregrinate",
    "meaning": "To travel or wander around from place to place.",
    "etymology": "From the Latin word '______', meaning 'to journey abroad,' derived from '______,' meaning 'foreign' or 'strange.'"
  },
  {
    "word": "Mellifluous",
    "meaning": "Sweet or musical; pleasant to hear.",
    "etymology": "From the Latin words '______,' meaning 'honey,' and '______,' meaning 'to flow.'"
  },
  {
    "word": "Ephemeral",
    "meaning": "Lasting for a very short time.",
    "etymology": "Derived from the Greek word '______,' meaning 'lasting only one day,' from '______,' meaning 'on,' and '______,' meaning 'day.'"
  },
  {
    "word": "Bamboozle",
    "meaning": "To deceive or trick someone in a playful or humorous way.",
    "etymology": "The exact origin is uncertain, but it may be related to the Scottish word '______,' meaning 'perplex.'"
  },
  {
    "word": "Nefarious",
    "meaning": "Wicked, villainous, or infamous for being extremely evil.",
    "etymology": "From the Latin word '______,' meaning 'abominable' or 'wicked,' derived from '______-' (not) and '______' (speak)."
  },
  {
    "word": "Panacea",
    "meaning": "A solution or remedy for all difficulties or diseases.",
    "etymology": "From the Greek word '______,' meaning 'universal remedy,' from '______' (all) and '______' (cure)."
  },
  {
    "word": "Halcyon",
    "meaning": "Denoting a period of time in the past that was idyllically happy and peaceful.",
    "etymology": "From the Greek myth of Alcyone, the daughter of Aeolus, who, when widowed, threw herself into the sea and became a kingfisher (halcyon)."
  },
  {
    "word": "Supine",
    "meaning": "Lying on the back with the face upward or failing to act or protest as a result of moral weakness or indolence.",
    "etymology": "From the Latin word '______,' meaning 'bent backward,' influenced by '______,' meaning 'above.'"
  },
  {
    "word": "Nebulous",
    "meaning": "In the form of a cloud or haze; unclear, vague, or ill-defined.",
    "etymology": "From the Latin word '______,' meaning 'mist' or 'cloud,' related to '______,' meaning 'nephew' (referring to clouds as 'flocks' in the sky)."
  },
  {
    "word": "Ethereal",
    "meaning": "Extremely delicate and light in a way that seems too perfect for this world.",
    "etymology": "From the Greek word '______,' meaning 'of the upper air' or 'heavenly,' from '______,' meaning 'air' or 'upper air.'"
  },
  {
    "word": "Perspicacious",
    "meaning": "Having a ready insight into and understanding of things.",
    "etymology": "From the Latin word '______,' meaning 'sharp-sighted' or 'keen,' derived from '______,' meaning 'to see through.'"
  },
  {
    "word": "Belligerent",
    "meaning": "Hostile and aggressive; engaged in war or conflict.",
    "etymology": "From the Latin word '______,' meaning 'war,' and '______,' meaning 'waging,' derived from '______,' meaning 'to wage.'"
  },
  {
    "word": "Obfuscate",
    "meaning": "To deliberately make something unclear or difficult to understand.",
    "etymology": "From the Latin word '______,' meaning 'darkened' or 'obscured,' from '______-' (over) and '______' (to darken)."
  },
  {
    "word": "Quintessential",
    "meaning": "Representing the most perfect or typical example of a quality or class.",
    "etymology": "From the medieval Latin word '______,' meaning 'of the fifth essence,' referring to the pure and concentrated extract of a substance."
  },
  {
    "word": "Chimerical",
    "meaning": "Existing only as the product of unchecked imagination; fantastically visionary or improbable.",
    "etymology": "From the Greek mythological creature Chimera, a fire-breathing monster with a lion's head, a goat's body, and a serpent's tail."
  },
  {
    "word": "Nomenclature",
    "meaning": "The devising or choosing of names for things, especially in a science or other discipline.",
    "etymology": "From the Latin words '______,' meaning 'name,' and '______,' meaning 'calling' or 'designation.'"
  },
  {
    "word": "Doppelganger",
    "meaning": "An apparition or double of a living person.",
    "etymology": "From the German words '______' (double) and '______' (goer), referring to a ghostly double or counterpart."
  }
];

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  return wordsList[randomIndex];
};

const EtymologyApp = () => {
  const [selectedWord, setSelectedWord] = useState(getRandomWord());
  const [userGuess, setUserGuess] = useState('');
  const [remainingGuesses, setRemainingGuesses] = useState(5);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [lengthClue, setLengthClue] = useState('');
  const [firstLetterClue, setFirstLetterClue] = useState('');
  const [lastLetterClue, setLastLetterClue] = useState('');
  const [meaningClue, setMeaningClue] = useState('');
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  useEffect(() => {
    setSelectedWord(getRandomWord());
    setRemainingGuesses(5);
    setCorrectGuess(false);
    setUserGuess('');
    setResultMessage('');
  }, [selectedWord.word]);


  const handleGuess = () => {
    if (userGuess.toLowerCase() === selectedWord.word.toLowerCase()) {
      setResultMessage('Congratulations! You guessed it right!');
      setCorrectGuess(true);
    } else {
      setRemainingGuesses((prevGuesses) => prevGuesses - 1);

      if (remainingGuesses === 1) {
        setResultMessage(`Sorry, you're out of guesses. The word was "${selectedWord.word}".`);
      } else {
        switch (6 - remainingGuesses) {
          case 1:
            setLengthClue(`Clue: The word has ${selectedWord.word.length} letters.`);
            break;
          case 2:
            setFirstLetterClue(`Clue: The first letter of the word is "${selectedWord.word[0]}".`);
            break;
          case 3:
            setLastLetterClue(`Clue: The last letter of the word is "${selectedWord.word[selectedWord.word.length - 1]}".`);
            break;
          case 4:
            setMeaningClue(`Clue: The meaning of the word is "${selectedWord.meaning}".`);
            break;
          default:
            setResultMessage('Incorrect guess. Try again!');
            setIncorrectGuesses((prevGuesses) => [...prevGuesses, userGuess]);
            break;
        }
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  const isButtonDisabled = remainingGuesses === 0 || correctGuess;

  return (
    <div>
      <h1>Etymology App</h1>
      <div className="container">
        <p className="etymology-text">{selectedWord.etymology}</p>
        <p className="length-clue">{lengthClue}</p>
        <p className="first-letter-clue">{firstLetterClue}</p>
        <p className="last-letter-clue">{lastLetterClue}</p>
        <p className="meaning-clue">{meaningClue}</p>
        <label className="input-container">
          Your Guess:
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isButtonDisabled}
        />
      </label>
      <button onClick={handleGuess} disabled={isButtonDisabled} className="submit-button">
      Submit Guess
        </button>
        <p className="remaining-guesses">Remaining Guesses: {remainingGuesses}</p>
        <p className="result-message">{resultMessage}</p>
        {incorrectGuesses.length > 0 && (
          <div className="incorrect-guesses">
            <p className="incorrect-guesses-text">Incorrect Guesses:</p>
            <ul className="incorrect-guess">
              {incorrectGuesses.map((guess, index) => (
                <li key={index}>{guess}</li>
              ))}
              </ul>
            </div>
          )}
        </div>
      </div>
  );
};

export default EtymologyApp;