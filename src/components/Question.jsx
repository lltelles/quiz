/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Options from './Options'

import './Question.css'


const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return (
        <div id='question'>
            <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Options
                        key={option}
                        option={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (<button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continue</button>)
            }
        </div>
    )
}

export default Question