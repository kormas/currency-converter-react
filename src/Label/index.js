import { StyledLabel } from "./styled";

const Label = ({ forContent, labelText, extraContent }) => (
    <StyledLabel
        htmlFor={forContent}>
        <span className="fieldset__labelText">{labelText}</span>
        {extraContent}
    </StyledLabel>
);

export default Label;