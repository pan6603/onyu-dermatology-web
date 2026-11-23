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