import styled from "styled-components";

export const StyledInput = styled.input`
    border: 2px solid black;
    padding: 5px;
    margin: 5px 5px 5px 0;
    width: 250px;
    border-radius: 5px;

    &:invalid {
        background-color: rgb(255, 121, 121);
    }
`;