import { StyledLabel, Update } from "./styled";

const LastUpdate = ({ source }) => (
    <Update>
        Data ostatniej aktualizacji: <b>{source}</b>
    </Update>
);

export default LastUpdate;