import { inputStore } from "../lib/inputStore";

function Result() {
    const { result } = inputStore()
    return (
        <fieldset className="result">
            <p className="legend">
                Result
            </p>
            <p className="text">
                {result}
            </p>
        </fieldset>
    );
}

export default Result;