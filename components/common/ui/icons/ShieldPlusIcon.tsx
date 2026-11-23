import styled from "styled-components";
import { ShieldPlus } from "lucide-react";

const ShieldPlusIconContainer = styled.div`
    max-width: 36px;
    width: 100%;
    height: 46px;
    background: #F0EDED;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
`

export default function ShieldPlusIcon() {
    return (
        <>
            <ShieldPlusIconContainer>
                <ShieldPlus 
                    size={20}
                    color="#6F5A4B"
                    strokeWidth={1.8}
                />
            </ShieldPlusIconContainer>

        </>
    )
}