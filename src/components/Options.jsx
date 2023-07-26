/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './Options.css'


const Options = ({ option, selectOption, answer }) => {
    // eslint-disable-next-line no-unused-vars
    const [quizState, dispatch] = useContext(QuizContext)


    return (
        <div className={`option 
        ${quizState.answerSelected && option === answer ? 'correct' : ''}
     ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`} onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}

export default Options