import { useRef } from "react";
import "./Input.scss";

function Input(props) {
  const { placeholder, buttonText, addItem } = props;
  const ref = useRef();

  const handleOnkeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value && e.target.value.trim() !== "") {
      addItem(e.target.value.trim());
      e.target.value = "";
    }
  };

  const handleAddItem = () => {
    if (ref.current.value && ref.current.value.trim() !== "") {
      addItem(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <div className="input">
      <input ref={ref} onKeyDown={handleOnkeyDown} placeholder={placeholder} />
      <button onClick={handleAddItem}>{buttonText}</button>
    </div>
  );
}

export default Input;
