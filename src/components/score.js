import useStore from "../hooks/useStore";
import { questions } from '../questions.js';

export default function Score() {
    const answers = useStore(state => state.getAnswers());
    var scores = {
        "E": 0,
        "I": 0,
        "N": 0,
        "S": 0,
        "F": 0,
        "D": 0,
        "B": 0,
        "W": 0,
    };

    answers.forEach((answer) => {
        var question = questions.filter((item) => item.id === answer.id)[0];
        const answer_id = question.answers.indexOf(answer.answer);
        scores[question.scores[answer_id]] += 1;
    });

    var result = "";
    if (scores["E"] > scores["I"]) {
        result += "E";
    } else {
        result += "I";
    }
    if (scores["N"] > scores["S"]) {
        result += "N";
    } else {
        result += "S";
    }
    if (scores["F"] > scores["D"]) {
        result += "F";
    } else {
        result += "D";
    }
    if (scores["B"] > scores["W"]) {
        result += "B";
    } else {
        result += "W";
    }

    return (
        <>
            {result}
        </>
    )
}