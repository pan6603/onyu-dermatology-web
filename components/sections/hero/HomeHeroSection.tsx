
import Image from "next/image"
import HomeHeroImageSvg from "@/public/images/hero/home-hero-image.svg"

import {
    HomeHeroSectionContainer,
    HomeHeroSectionInner,
    HomeHeroEyebrow,
    EyebrowBadge,
    BadgeText,
    BadgeDivider,
    HomeHeroContent,
    HomeHeroText,
    HeroTitle,
    HeroDescription,
    HomeHeroActions,
    HeroSecondaryButton,
    HeroPrimaryButton,
    HomeHeroImageContainer,
    HomeHeroFeatures,
} from "@/styles/sections.styles"

import CalendarCheckIcon from "@/components/common/ui/icons/CalendarCheckIcon"
import FeatureCard from "@/components/common/ui/cards/FeatureCard"
import ShieldCheckIcon from "@/components/common/ui/icons/ShieldCheckIcon"
import MicroscopeIcon from "@/components/common/ui/icons/MicroscopeIcon"
import ShieldPlusIcon from "@/components/common/ui/icons/ShieldPlusIcon"

const heroFeatures = [
    {
        id: "personal-care",
        icon: <ShieldCheckIcon />,
        title: "피부과 전문의 1:1 맞춤 진료",
        description: "초진 문진부터 최종 관리까지 대표원장이 전 과정을 직접 책임집니다.",
    },
    {
        id: "skin-diagnosis",
        icon: <MicroscopeIcon />,
        title: "정밀 피부 영상 진단",
        description: "표피층과 진피층의 색소, 모공, 수분도를 다각도로 정량 측정합니다.",
    },
    {
        id: "safety",
        icon: <ShieldPlusIcon />,
        title: "안전 중심 · 정량 원칙",
        description: "정품 약제와 표준화된 프로토콜만을 엄수하여 안정적인 회복을 돕습니다.",
    },
]

export default function HomeHeroSection() {
    return (
        <HomeHeroSectionContainer>
            <HomeHeroSectionInner>
                <HomeHeroEyebrow>
                    <EyebrowBadge>
                        <BadgeText>
                            ONYOU CLINIC · MEDICAL AESTHETICS
                        </BadgeText>
                    </EyebrowBadge>
                    <BadgeDivider />
                </HomeHeroEyebrow>

                <HomeHeroContent>
                    <HomeHeroText>
                        <HeroTitle>
                            피부의 건강을 <br />
                            생각하는 진료
                        </HeroTitle>

                        <HeroDescription>
                            편안한 진료 환경과 세심한 상담을 지향합니다.
                            불필요한 시술을 지양하고 본연의 균형과
                            피부 장벽 회복에 집중합니다.
                        </HeroDescription>
                    </HomeHeroText>

                    <HomeHeroActions>
                        <HeroSecondaryButton href="">병원 소개 바로가기</HeroSecondaryButton>

                        <HeroPrimaryButton href="">
                            온라인 상담 예약
                            <CalendarCheckIcon />
                        </HeroPrimaryButton>
                    </HomeHeroActions>
                </HomeHeroContent>

                <HomeHeroImageContainer>
                    <Image
                        src={HomeHeroImageSvg}
                        alt="온유의원 메인 이미지"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1200px"
                        style={{ objectFit: "cover" }}
                    />
                </HomeHeroImageContainer>

                <HomeHeroFeatures>
                    {heroFeatures.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icons={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </HomeHeroFeatures>
            </HomeHeroSectionInner>
        </HomeHeroSectionContainer>
    )
}
