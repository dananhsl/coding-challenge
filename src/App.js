import './App.css';
import {questions} from './questions.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <h1>{question.question}</h1>
            <ul>
              {question.answers.map((answer) => {
                return (
                  <li>
                    <input type="radio" name={question.id} value={answer} />
                    {answer}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}    
      </header>
    </div>
  );
}

export default App;
