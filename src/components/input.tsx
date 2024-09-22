import "../styles/module.css"
function MainInput() {
    return (
        <fieldset>
            <p className="legend" >Input </p >
            <textarea spellCheck='false' className="big-input" placeholder="ekteb 7keya" ></textarea>
        </fieldset>
    );
}

export default MainInput;