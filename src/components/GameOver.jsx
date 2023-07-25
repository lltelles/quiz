/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './Gameover.css'

import WellDone from '../img/welldone.svg'



const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
        <h2>Game Over!</h2>
        <p>Final Score: {quizState.score}</p>
        <p>You've got {quizState.score} of {quizState.questions.length} questions</p>
        <img src={WellDone} alt="end of the quiz" />
        <button onClick={()=> dispatch({type: 'NEW_GAME'})}>Restart the Quiz!</button>
    </div>
  )
}

export default GameOver