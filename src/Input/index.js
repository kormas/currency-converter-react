import "./style.css";

const Input = ({ value, onChange, id, onKeyDown }) => {
    return (
        <input
            className="fieldset__field"
            type="number"
            value={value}
            onChange={onChange}
            id={id}
            placeholder="Wpisz kwotę"
            min="0"
            step="1"
            onKeyDown={onKeyDown}
        />
    )
};

export default Input;