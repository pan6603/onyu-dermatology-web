
import Link from "next/link";
import styled from "styled-components";

export const HomeHeroSectionContainer = styled.section`
    max-width: 1920px;
    width: 100%;
    height: 1257px;
    background: #F6F3F2;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const HomeHeroSectionInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: #F6F3F2;

    padding: 80px 128px 48px 48px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HomeHeroEyebrow = styled.div`
    width: 100%;
    height: 25px;

    display: flex;
    align-items: center;
    gap: 12px;

`

export const EyebrowBadge = styled.div`
    max-width: 283px;
    width: 100%;
    height: 25px;
    background: #E6E2DC;

    padding-left: 8px;
    padding-right: 8px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
`

export const BadgeText = styled.span`
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16.8px;
    letter-spacing: 1.2px;
    text-align: left;
    color: #6f5a4b;
`;

export const BadgeDivider = styled.div`
    max-width: 48px;
    width: 100%;
    height: 1px;
    background: #C4C7C8;
`


export const HomeHeroContent = styled.div`
    width: 100%;
    height: 203px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const HomeHeroText = styled.div`
    max-width: 591px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HeroTitle = styled.h1`
    font-family: "Noto Serif", serif;
    font-size: 52px;
    line-height: 65px;
    letter-spacing: -1.3px;
    text-align: left;
    color: #1B1C1C;
`

export const HeroDescription = styled.p`
    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 28.9px;
    letter-spacing: -0.09px;
    text-align: left;
    color: #444748;
`



export const HomeHeroActions = styled.div`
    max-width: 376px;
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const HeroSecondaryButton = styled(Link)`
    max-width: 176px;
    width: 100%;
    height: 48px;

    background: #FFFFFF;
    border-radius: 4px;

    font-size: 14px;
    color: #6F5A4B;

    padding: 14px 28px;
`

export const HeroPrimaryButton = styled(Link)`
    max-width: 183px;
    width: 100%;
    height: 48px;
    background: #6F5A4B;

    border-radius: 4px;
    padding: 14px 28px;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 2px;
`



export const HomeHeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 540px;

    border-radius: 16px;
    overflow: hidden;
`

export const HomeHeroFeatures = styled.div`
    width: 100%;
    height: 136px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`


export const HomePhilosophySectionContainer = styled.section`
    max-width: 1920px;
    width: 100%;
    height: 988px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomePhilosophySectionInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: blue;
`

export const HomeServicesSectionContainer = styled.section`
    max-width: 1920px;
    width: 100%;
    height: 679px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeServicesSectionInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: yellow;
`


export const HomeDoctorsSectionContainer = styled.section`
    max-width: 1920px;
    width: 100%;
    height: 957px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeDoctorsSectionInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: red;
`

export const HomeLocationSectionContainer = styled.section`
    max-width: 1920px;
    width: 100%;
    height: 969px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeLocationSectionInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: green;
`