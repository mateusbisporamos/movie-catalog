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
        height: 24px;
        min-width: 24px;
        border-radius: 4px;
    }    
`
const color = (props) => {
    if(props.selected === true){
        return "#181818;"
    } else if (props.disable === true){
        return "#43413F;"
    } else {
        return "#E0A52E;"
    }
}
export const PageNumber = styled.span`
    justify-content: center;
    min-width: 100%;
    text-align: center;
    height: 100%;
    padding: 2px;
    border-radius: 4px;
    
    background-color: ${props => props.selected === true ? "#E0A52E;" : "transparent;"};
    color: ${props => color(props)};
    display: ${props => props.visible === true ? "flex;" : "none;"}
    
    :hover{
        text-decoration: underline;
    }
`