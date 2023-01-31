import Question from '../components/question.js';
import {questions} from '../questions.js';


export default function Form () {
    return(
        <>  
            {questions.map(({id, question, answers}) => (
                <Question
                key={id}
                id={id}
                question={question}
                answers={answers}
                />
            ))}
        </>
    );
}