/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './Gameover.css'

import WellDone from '../img/welldone.svg'



const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Game Over!</h2>
        <p>Final Score:</p>
        <p>Vc acertou y de x perguntas</p>
        <img src={WellDone} alt="end of the quiz" />
        <button>Restart the Quiz!</button>
    </div>
  )
}

export default GameOver