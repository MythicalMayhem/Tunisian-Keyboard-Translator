import { inputStore } from "../lib/inputStore";
import Copy from "./copy";

function Result() {
    const { result } = inputStore()
    return (
        <fieldset className="result">
            <Copy />
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