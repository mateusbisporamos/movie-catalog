import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 4px;
    gap: 12px;
    padding-bottom: 8px;
    cursor: default;
    transition: .5s;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    p{
        text-align: center;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        color: #43413F;
        transition: .5s;
    }

    button{
        font-family: Ubuntu;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 200; 
        background: #181818;
        border: 1px solid white;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        transition:.5s;
        
        :hover{
            background: #E0A52E;
            color: #181818;
            border: 1px solid #181818;
            font-weight: 500; 
        }
    }

    :hover{
        background-color: #43413F;

        p{
            font-weight: 500;
            color: #E0A52E;
        }
    }
`