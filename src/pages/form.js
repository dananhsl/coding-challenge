import Question from '../components/question.js';
import {questions} from '../questions.js';
import {useNavigate} from 'react-router-dom';
import useStore from '../hooks/useStore.js';


export default function Form () {
    const navigate = useNavigate();
    const getAnswers = useStore(state => state.getAnswers);
    return(
        <>  
            <h1 className='heading'>Persönlichkeitstest</h1>
            <section className='form-container'>
                
                    {questions.map(({id, question, answers}) => (
                        <Question
                        key={id}
                        id={id}
                        question={question}
                        answers={answers}
                        />
                    ))}
                

                <button type="submit" className='submit-btn' onClick={
                    () => {
                        if (getAnswers().length === questions.length) {
                            //navigate to results page
                            navigate('/result');
                        } else {
                            //alert user to complete all questions
                            alert("Bitte beantworte zuerst alle Fragen.");
                        };
                    }
                }
                >Zeig mir mein Ergebnis!
                </button>
            </section>
        </>
    );
}