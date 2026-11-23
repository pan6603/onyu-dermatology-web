import styled from "styled-components";
import { CalendarCheck } from "lucide-react";


const CalendarCheckIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Tablet */
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 15px;
        height: 15px;
    }

    /* Mobile */
    @media (max-width: 768px) {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
    }
`


export default function CalendarCheckIcon() {
    return (
        <>
            <CalendarCheckIconContainer>
                <CalendarCheck size={16} strokeWidth={1.8} />
            </CalendarCheckIconContainer>
        </>
    )
}