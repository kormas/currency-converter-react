import "./style.css";

const Input = ({ value, onChange, id }) => {
    return (
        <input
            className="form__field"
            type="number"
            value={value}
            onChange={onChange}
            id={id}
            // onInvalid={() => alert('Error')}
            placeholder="Wpisz kwotę"
            min="0"
            step="1"
        />
    )
};

export default Input;