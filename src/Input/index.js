import { StyledInput } from "./styled";

const Input = ({ value, onChange, id, onKeyDown }) => {
    return (
        <StyledInput
            className="fieldset__field"
            type="number"
            value={value}
            onChange={onChange}
            id={id}
            placeholder="Wpisz kwotę"
            min="0"
            step="any"
            onKeyDown={onKeyDown}
        />
    )
};

export default Input;