import styled from "styled-components"
import type { ReactNode } from "react";

const FeatureCardContainer = styled.div`
    max-width: 360px;
    width: 100%;
    height: 120px;
    background: #FFFFFF;

    border-radius: 12px;
    padding: 24px;

    display: flex;
    align-items: flex-start;
    gap: 16px;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: none;
        width: auto;
        height: auto;
        min-height: 120px;

        flex: 1;
        min-width: 0;
        padding: 16px;
        gap: 10px;

        box-sizing: border-box;
    }
`

const FeatureCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        min-width: 0;
        gap: 6px;
    }
`

const FeatureCardTitle = styled.span`
    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.09px;
    text-align: left;
    color: #1b1c1c;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 15px;
        line-height: 22px;
    }
`

const FeatureCardDescription = styled.p`
    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 20.8px;
    letter-spacing: 0px;
    text-align: left;
    color: #444748;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 12px;
        line-height: 19px;
        overflow-wrap: break-word;
    }
`


interface FeatureCardProps {
    icons: ReactNode;
    title: string;
    description: string; 
}


export default function FeatureCard({ icons, title, description }: FeatureCardProps) {
    return (
        <>
            <FeatureCardContainer>
                {icons}
                <FeatureCardContent>
                    <FeatureCardTitle>{title}</FeatureCardTitle>
                    <FeatureCardDescription>{description}</FeatureCardDescription>
                </FeatureCardContent>
            </FeatureCardContainer>
        </>
    )
}