import './App.css'
import React from 'react'
import Intro from './components/Intro'
import Trivia from './components/Trivia'
import data from './data.js' // for testing and desigining

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false)
  const [trivias, setTrivias] = React.useState([])

  async function fetchTrivias() {
    await fetch(
      'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setTrivias(data.results))
      .catch((err) => console.log(err))
  }

  React.useEffect(() => {
    if (!startQuiz) fetchTrivias()
  }, [startQuiz])

  return (
    <main>
      <div className='main__topcurve'></div>
      {!startQuiz && <Intro handleClick={() => setStartQuiz(true)} />}
      {startQuiz && <Trivia trivias={trivias} setStartQuiz={setStartQuiz} />}

      <div className='main__bottomcurve'></div>
    </main>
  )
}
