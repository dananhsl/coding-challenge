import Score from "../components/score";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


export default function Result() {
    const navigate = useNavigate();
    return (
        <>
            <section className="container-result">
                <h1 className="result">Dein Persönlichkeits-Typ ist <Score /></h1>
            </section>
            <button className="back-btn" onClick={() => navigate('/')}> <FontAwesomeIcon icon={faArrowLeft} /> Zurück zum Test</button>
        </>
    )
}

