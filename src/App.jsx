/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'

import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import './App.css'


function App() {

  const [quizState, dispatch] = useContext(QuizContext)

useEffect(()=>{
  //random questions
  dispatch({type: 'REORDER_QUESTIONS'})
},[])

  return (
    <div className='App'>
      <h1>Coding Quiz</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}
      {quizState.gameStage === 'End' && <GameOver/>}
    </div>
  )
}

export default App
