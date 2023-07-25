import Quiz from '../img/quiz.svg'

import './Welcome.css'


const Welcome = () => {
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