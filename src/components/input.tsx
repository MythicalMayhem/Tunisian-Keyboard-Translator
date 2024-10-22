import "../styles/module.css"
import { inputStore } from "../lib/inputStore"; 
function MainInput() {
    const { convert, setText, current } = inputStore()

    const handleInput = (val: string) => {
        convert(val)
        setText(val)
    }
    return (
        <fieldset>
            <p className="legend" >Input </p >
            <textarea value={current}
                onChange={(e) => handleInput(e.target.value)}
                spellCheck='false' className="big-input"
                placeholder="ekteb 7keya" >
            </textarea>
        </fieldset>
    );
}

export default MainInput;