import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    background-color: #ffffff;
    padding: 10px 20px;
    border: 1px solid #323232;
    border-radius: 5px;
    margin: 10px 0 60px;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

    @media (max-width: 530px) {
        padding: 10px 5px;
    }
`;

export const Legend = styled.legend`
    background-color: #2b4ba4;
    color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;

    @media (max-width: 530px) {
        margin: 1px 0;
        text-align: center;
    }
`;