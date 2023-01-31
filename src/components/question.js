export default function Question (props) {
    return (
        <section>
            <h1>{props.question}</h1>
            
            {props.answers.map((answer) => {
                return (
                    <p>
                        <input type="radio" name={props.id} value={answer}/>
                        {answer}
                    </p>
                );
            })}
            
        
        </section>
    )
}