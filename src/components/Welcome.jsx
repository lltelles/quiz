import Quiz from '../img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Welcome.css'


const Welcome = () => {
const quizState = useContext(QuizContext)

console.log(quizState)

  return (
    <div id='welcome'>
        <h2>Welcome!!</h2>
        <p>Press the Start button:</p>
        <button>Start</button>
        <img src={Quiz} alt="Welcome image" />
    </div>
  )
}

export default Welcome