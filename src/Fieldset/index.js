import "./style.css";

const Fieldset = ({ title, body }) => (
    <fieldset className="fieldset">
        <legend className="fieldset__legend">{title}</legend>
        {body}
    </fieldset>
);

export default Fieldset;