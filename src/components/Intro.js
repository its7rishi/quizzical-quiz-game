import React from 'react'

export default function Intro(props) {
  return (
    <div className='intro'>
      <div className='intro__topcurve'></div>
      <h1 className='intro__title'>Quizzical</h1>
      <p className='intro__para'>A fun trivia game!</p>
      <button className='intro__button' onClick={props.handleClick}>
        Start Quiz
      </button>
    </div>
  )
}
