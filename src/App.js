import './App.css';
import {questions} from './questions.js';
import Question from './components/question.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {questions.map(({id, question, answers, key }) => (
          <Question
            key={id}
            id={id}
            question={question}
            answers={answers}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
