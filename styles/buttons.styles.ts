import styled from "styled-components";



export const MobileMenuButton = styled.button`
    display: none;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        display: none;
    }

    /* Mobile */
    @media (max-width: 768px) {
        display: flex;
    }
`;
