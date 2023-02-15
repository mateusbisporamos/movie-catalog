import styled from "styled-components";

export const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-itens: center;
    width: 100%;
    height: 100%;
    padding: 12px 72px;
    gap: 24px;

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
    
export const PagesConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;

    p{
        color: #43413F;
        font-size: 10px;
        font-weight: 300;
        font-style: italic;
    }
`

export const PageSelector = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #E0A52E;
    
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        text-align: center;
        height: 22px;
        min-width: 22px;
        border-radius: 4px;
    }
    `
    
export const PageNumber = styled.span`
    width: 100%;
    height: 100%;
    border-radius: 4px;

    color: ${props => props.selected ? "#181818" : "#E0A52E"};
    background-color: ${props => props.selected ? "#E0A52E" : "#181818"};

    :hover{
        text-decoration: underline;
    }
` 