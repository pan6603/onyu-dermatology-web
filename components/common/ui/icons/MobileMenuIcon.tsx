import { Menu } from "lucide-react";
import { MobileMenuButton } from "@/styles/buttons.styles"

export default function MobileMenuIcon() {
    return (
        <>
            <MobileMenuButton type="button" aria-label="메뉴 열기">
                <Menu size={24} color="#1B1C1C" strokeWidth={2} />
            </MobileMenuButton>
        </>
    )
}