import { inputStore } from "../lib/inputStore";

function Copy() {
  const { result } = inputStore()
  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    alert("text copied ")
  }


  return (
    <button onClick={() => handleCopy()} className="copy-text-button">
      Copy Text
    </button>
  );
}

export default Copy;