import "./style.css";

const Label = ({ forContent, labelText, extraContent }) => (
    <label htmlFor={forContent}>
        <span className="form__labelText">{labelText}</span>
        {extraContent}
    </label>
);

export default Label;