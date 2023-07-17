import React from 'react'

function GuessInput({ handleSubmit, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(tentativeGuess)
        setTentativeGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        disabled={gameStatus !== 'running'}
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern={'[a-zA-Z]{5}'}
        title="Five letters only"
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  )
}

export default GuessInput
