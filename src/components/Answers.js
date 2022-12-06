import React from 'react'

export default function Answers({ wAns, rAns }) {
  const [answers, setAnswers] = React.useState([])
  const [correctAnswer, setCorrectAns] = React.useState(rAns)
  const [selected, setSelected] = React.useState([])

  function handleClick(e) {
    // setSelected((prevSelected) => [...prevSelected, e.target.value])
    console.log(e.target.parentNode.parentNode)
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
    <div className='trivia--answers'>
      {answers.map((ans) => (
        <button
          className='trivia--answers__choice'
          key={ans}
          value={ans}
          onClick={handleClick}>
          {ans}
        </button>
      ))}
    </div>
  )
}
