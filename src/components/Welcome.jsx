/* eslint-disable no-unused-vars */
import Quiz from '../img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Welcome.css'


const Welcome = () => {
const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div id='welcome'>
        <h2>Welcome!</h2>
        <p>Press the Start button</p>
        <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Start</button>
        <img src={Quiz} alt="Welcome image" />
    </div>
  )
}

export default Welcome