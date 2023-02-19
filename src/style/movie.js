import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 8px;
    gap: 12px;
    padding-bottom: 8px;
    cursor: default;
    transition: .5s;
    
    img{
        width: 100%;
        min-width: 100%;
        max-height: 4380px;
        min-height: 380px;
        object-fit: cover;
        border-radius: 8px;
    }

    p{
        text-align: center;
        width: 100%;
        padding: 0 8px;
        font-size: 16px;
        font-weight: 500;
        color: #43413F;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
                line-clamp: 1; 
        -webkit-box-orient: vertical;
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
        bootom: 0;
        transition:.5s;
        
        :hover{
            background: #E0A52E;
            color: #181818;
            border: 1px solid #181818;
            font-weight: 500; 
        }
    }

    :hover{
        background-color: #202020;

        p{
            font-weight: 500;
            color: #E0A52E;
        }
    }
`