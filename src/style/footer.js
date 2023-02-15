import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    width: 100%;
    color: #43413F;
    padding: 12px;

    p {
        font-size: 12px;
        font-weight: 300;
    }

    a {
        font-size: 14;
        font-weight: 400;
        color: #43413F;
        text-decoration: underline;
        transition: .4s;

        :hover{
            color: #E0A52E;
        }
    }
`