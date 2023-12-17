import "./style.css";

const Label = ({ forContent, labelText, extraContent }) => (
    <label htmlFor={forContent}>
        <span className="fieldset__labelText">{labelText}</span>
        {extraContent}
    </label>
);

export default Label;