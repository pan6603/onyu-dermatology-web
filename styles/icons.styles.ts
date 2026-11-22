import styled from "styled-components";

export const LogoIconContainer = styled.div`
    max-width: 40px;
    width: 100%;
    height: 40px;
    background: #EAE8E7;

    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;

    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 36px;
        height: 36px;
        border-radius: 10px;
        padding: 4px;
        flex-shrink: 0;
    }

    /* Mobile */
    @media (max-width: 768px) {
        max-width: 32px;
        height: 32px;
        border-radius: 8px;
        padding: 4px;
        flex-shrink: 0;
    }
`
