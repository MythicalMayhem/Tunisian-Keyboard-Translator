import "../styles/module.css"
import { inputStore } from "../lib/inputStore";
import { useState } from "react";
function MainInput() {
    const { convert } = inputStore()
    const [text, setText] = useState<string>()
    const handleInput = (val: string) => {
        convert(val)
        setText(val)
    }
    return (
        <fieldset>
            <p className="legend" >Input </p >
            <textarea value={text}
                onChange={(e) => handleInput(e.target.value)}
                spellCheck='false' className="big-input"
                placeholder="ekteb 7keya" >
            </textarea>
        </fieldset>
    );
}

export default MainInput;