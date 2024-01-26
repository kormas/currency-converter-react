import styled from "styled-components";

export const Line = styled.p`
    text-align: ${({textAlign}) => textAlign};

    @media (max-width: 530px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;