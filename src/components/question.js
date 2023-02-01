import useStore from "../hooks/useStore";

export default function Question (props) {
    useStore(state => state.answers);
    const setAnswers = useStore(state => state.setAnswers);
    const getAnswers = useStore(state => state.getAnswers)

    return (
            <section className="question-container">
                <h1>{`${props.id}. ${props.question}`}</h1>            
                {props.answers.map((answer, index) => {
                    return (
                        <p key={index}>
                            <input 
                                type="radio" 
                                id={answer}
                                name={props.id} 
                                value={answer} 
                                defaultChecked={
                                    getAnswers().filter((item) => item.id === props.id)[0]?.answer === answer
                                }
                                onChange={() => setAnswers(answer, props.id)} 
                            
                            /><label htmlFor={answer}>

                            {answer}
                            </label>
                        </p>
                    );
                })}       
            </section>            
    )
}