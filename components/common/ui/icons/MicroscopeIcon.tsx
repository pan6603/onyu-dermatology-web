import styled from "styled-components";
import { Microscope } from "lucide-react";

const MicroscopeIconContainer = styled.div`
    max-width: 36px;
    width: 100%;
    height: 46px;
    background: #F0EDED;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
`


export default function MicroscopeIcon() {
    return (
        <>
            <MicroscopeIconContainer>
                <Microscope 
                    size={20}
                    color="#6F5A4B"
                    strokeWidth={1.8}
                />
            </MicroscopeIconContainer>
  
        </>
    )
}