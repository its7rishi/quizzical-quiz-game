import React from 'react'
import { decode } from 'html-entities'

export default function Question({
  question,
  wAns,
  rAns,
  count,
  setCount,
  gameOver,
}) {
  const [answers, setAnswers] = React.useState([])
  const [correctAnswer, setCorrectAns] = React.useState(rAns)
  const [selected, setSelected] = React.useState()

  React.useEffect(() => {
    if (gameOver) {
      selected === correctAnswer
        ? setCount((prevCount) => prevCount + 1)
        : setCount((prevCount) => prevCount)
    }

    let btns = document.getElementsByClassName('trivia--answers__choice')
    for (let i = 0; i < btns.length; i++) {
      if (
        gameOver &&
        btns[i].value === selected &&
        btns[i].value === correctAnswer
      ) {
        btns[i].classList.remove('selected')
        btns[i].classList.add('correct')
      } else if (
        gameOver &&
        btns[i].value === selected &&
        btns[i].value !== correctAnswer
      ) {
        btns[i].classList.remove('selected')
        btns[i].classList.add('wrong')
      } else if (
        gameOver &&
        btns[i].value !== selected &&
        btns[i].value === correctAnswer
      ) {
        btns[i].classList.add('correct')
      }
    }
  }, [gameOver])

  function handleClick(e) {
    if (!gameOver) {
      e.target.classList.add('selected')
      setSelected(e.target.value)
      if (e.target.value === correctAnswer) {
      }
    }
  }

  function jumbleAnswers() {
    let allAnswers = [...wAns, rAns]
    for (let i = 0; i < allAnswers.length; i++) {
      let j = Math.floor(Math.random() * (i + 1))

      let k = allAnswers[i]
      allAnswers[i] = allAnswers[j]
      allAnswers[j] = k
    }
    return allAnswers
  }

  React.useEffect(() => {
    setAnswers(jumbleAnswers())
  }, [])

  return (
    <div className='trivia--quesiton'>
      <h5 className='trivia--question__text'>{decode(question)}</h5>
      <div className='trivia--answers' key={question}>
        {answers.map((item) => (
          <button
            className={
              item === selected
                ? 'trivia--answers__choice selected'
                : 'trivia--answers__choice'
            }
            key={item}
            value={item}
            onClick={handleClick}>
            {decode(item)}
          </button>
        ))}
      </div>
    </div>
  )
}
