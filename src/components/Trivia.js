import React from 'react'
import Question from './Question'

export default function Trivia({ trivias, setStartQuiz }) {
  const [count, setCount] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(false)

  function checkAns() {
    setGameOver(true)
  }
  return (
    <div className='trivia'>
      {trivias.map((trivia, idx) => (
        <div key={trivia.question} className='trivia--qna'>
          <Question
            question={trivia.question}
            wAns={trivia.incorrect_answers}
            rAns={trivia.correct_answer}
            count={count}
            setCount={setCount}
            gameOver={gameOver}
          />
        </div>
      ))}
      <div className='trivia--chk'>
        {gameOver && (
          <p className='trivia--chk__winMsg'>
            You scored {count}/5 correct answers
          </p>
        )}

        {gameOver ? (
          <button
            className='trivia--chk__btn'
            onClick={() => setStartQuiz(false)}>
            Play Again
          </button>
        ) : (
          <button className='trivia--chk__btn' onClick={checkAns}>
            Check Answers
          </button>
        )}
      </div>
    </div>
  )
}
