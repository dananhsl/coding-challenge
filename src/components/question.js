import useStore from "../hooks/useStore";

export default function Question (props) {
    const setAnswers = useStore(state => state.setAnswers);
    return (
        <section>
            <h1>{`${props.id}. ${props.question}`}</h1>            
            {props.answers.map((answer) => {
                return (
                    <p>
                        <input type="radio" name={props.id} value={answer} onClick={() => setAnswers(answer, props.id)}/>
                        {answer}
                    </p>
                );
            })}       
        </section>
    )
}