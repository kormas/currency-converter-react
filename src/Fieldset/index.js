import { StyledFieldset, Legend } from "./styled";

const Fieldset = ({ title, body }) => (
    <StyledFieldset>
        <Legend>
            {title}
        </Legend>
        {body}
    </StyledFieldset>
);

export default Fieldset;