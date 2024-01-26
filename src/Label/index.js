import { StyledLabel } from "./styled";

const Label = ({ forContent, labelText }) => (
    <StyledLabel
        htmlFor={forContent}>
        <span>{labelText}</span>
    </StyledLabel>
);

export default Label;