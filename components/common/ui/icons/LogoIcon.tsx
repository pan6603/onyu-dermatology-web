import Image from "next/image"
import LogoIconSvg from "@/public/icons/logo-icon.svg"
import { LogoIconContainer } from "@/styles/icons.styles"



export default function LogoIcon() {
    return (
        <>
            <LogoIconContainer>
                <Image 
                    src={LogoIconSvg}
                    alt="logo-icon"
                    width={40}
                    height={40}
                />
            </LogoIconContainer>
        </>
    )
}