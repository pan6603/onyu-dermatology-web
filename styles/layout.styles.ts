import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1920px;
    width: 100%;
    height: 80px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        height: 64px;
    }
`

export const HeaderInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;

    padding-left: 48px;
    padding-right: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding-left: 32px;
        padding-right: 32px;
    }
`

export const HeaderLogo = styled.div`
    max-width: 204px;
    width: 100%;
    height: 47px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 180px;
        height: 40px;
    }
`

export const LogoText = styled.div`
    max-width: 150px;
    width: 100%;
    height: 47px;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 130px;
        height: 40px;
    }
`

export const BrandName = styled.span`
    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 30.8px;
    letter-spacing: -0.55px;
    text-align: left;
    color: #1b1c1c;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 18px;
        line-height: 25.2px;
        letter-spacing: -0.45px;
    }
`

export const BrandSubtitle = styled.p`
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 16.8px;
    letter-spacing: 1.2px;
    color: #6f5a4b;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 1px;
    }
`


export const HeaderNav = styled.div`
    max-width: 504px;
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavMenu = styled.nav`
    max-width: 363px;
    width: 100%;
    height: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.025em;
    color: #444748;
    text-decoration: none;
`

export const HeaderCTA = styled(Link)`
    max-width: 100px;
    width: 100%;
    height: 40px;
    background: #6F5A4B;

    font-family: "WenQuanYi Zen Hei", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: 0.35px;
    
    color: #ffffff;
    opacity: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
`


export const FooterContainer = styled.footer`
    max-width: 1920px;
    width: 100%;
    height: 389px;
    background: #FBF9F8;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterInner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    background: blue;
`