/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Question.css'


const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div id='question'>
            <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <p>Options</p>
            </div>
            <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Continue</button>
        </div>
    )
}

export default Question