import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    aling-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 72px;

    border-bottom: 1px solid #43413F; 

    img {
        height: 32px;
    }
`

export const SearchBar = styled.form`
    display: flex;
    display: flex;
    aling-items: center;
    gap: 0;
`

export const SearchInput = styled.input`
    border: 1px solid #E0A52E;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-left: 8px;
    width: 282px;
    max-height: 36px;
    background: #181818;
    color: #E0A52E;

    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: 400;

    ::placeholder{
        color: #43413F;
        font-weight: 300;
    }
`

export const SearchButton = styled.button`
    width: 36px;
    height: 36px;
    background: #E0A52E;
    border: 1px solid transparent;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    transition: .4s;
    
    svg {
        width: 16px;
        height: 16px;
        fill: #181818; 
    }

    :hover{
        background: #181818;
        border: 1px solid #E0A52E;
        svg {
            fill: #E0A52E; 
        }
    }
`