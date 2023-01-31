import useStore from "../hooks/useStore";

export default function Question (props) {
    useStore(state => state.transactions);
    const setAnswers = useStore(state => state.setAnswers);
    const getAnswers = useStore(state => state.getAnswers)

    return (
        <section>
            <h1>{`${props.id}. ${props.question}`}</h1>            
            {props.answers.map((answer) => {
                return (
                    <p>
                        <input 
                            type="radio" 
                            name={props.id} 
                            value={answer} 
                            defaultChecked={
                                getAnswers().filter((item) => item.id === props.id)[0]?.answer === answer
                            }
                            onChange={() => setAnswers(answer, props.id)} 
                           
                        />
                        {answer}
                    </p>
                );
            })}       
        </section>
    )
}