import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessResults, setGuessResults] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmit(guess) {
    const nextGuesses = [...guessResults, guess]
    setGuessResults(nextGuesses)

    if (guess === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer}></GuessResults>
      <GuessInput
        handleSubmit={handleSubmit}
        gameStatus={gameStatus}
      ></GuessInput>
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessResults.length}></WonBanner>
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer}></LostBanner>}
    </>
  )
}

export default Game
