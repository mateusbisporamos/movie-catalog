import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    color: #43413F;

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