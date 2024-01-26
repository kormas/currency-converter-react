import { StyledFieldset, Legend } from "./styled.js";

const Fieldset = ({ title, body }) => (
    <StyledFieldset>
        <Legend>
            {title}
        </Legend>
        {body}
    </StyledFieldset>
);

export default Fieldset;