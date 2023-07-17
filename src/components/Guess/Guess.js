import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'
  return <span className={className}>{letter}</span>
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer)

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          status={result ? result[index].status : undefined}
          letter={result ? result[index].letter : undefined}
        ></Cell>
      ))}
    </p>
  )
}

export default Guess
