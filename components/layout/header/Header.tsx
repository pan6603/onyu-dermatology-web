import { 
    HeaderContainer,
    HeaderInner,
    HeaderLogo,
    LogoText,
    BrandName,
    BrandSubtitle,
    HeaderNav,
    NavMenu,
    NavLink,
    HeaderCTA
} from "@/styles/layout.styles"
import LogoIcon from "@/components/common/ui/icons/LogoIcon"



export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <HeaderLogo>
                        <LogoIcon />
                        <LogoText>
                            <BrandName>온유피부과의원</BrandName>
                            <BrandSubtitle>ONYOU CLINIC</BrandSubtitle>
                        </LogoText>
                    </HeaderLogo>

                    <HeaderNav>
                        <NavMenu>
                            <NavLink href="">병원소개</NavLink>
                            <NavLink href="">의료진소개</NavLink>
                            <NavLink href="">진료안내</NavLink>
                            <NavLink href="">오시는길</NavLink>
                        </NavMenu>
                        <HeaderCTA href="">진료 예약</HeaderCTA>
                    </HeaderNav>
                </HeaderInner>
            </HeaderContainer>
        </>
    )
}