import styled from "styled-components";
import { ShieldCheck } from "lucide-react";

const ShieldCheckIconContainer = styled.div`
    max-width: 36px;
    width: 100%;
    height: 46px;
    background: #F0EDED;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        max-width: 32px;
        width: 32px;
        height: 40px;
        flex-shrink: 0;
    }

    /* Mobile */
    @media (max-width: 768px) {
        max-width: 32px;
        width: 32px;
        height: 40px;
        flex-shrink: 0;
    }
`


export default function ShieldCheckIcon() {
    return (
        <>
            <ShieldCheckIconContainer>
                <ShieldCheck
                    size={20}
                    color="#6F5A4B"
                    strokeWidth={1.8}
                />
            </ShieldCheckIconContainer>
 
        </>
    )
}