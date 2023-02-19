import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 520px;
`
    
export const CarouselImages = styled.div`
    display: flex;
    transition: transform 0.25s ease;
    
    img{
        position: relative;
        float: right;
        min-width: 100%;
        max-height: 520px;
        min-height: 520px;
        object-fit: cover;
    }
`

export const PosterFilter = styled.div`
    height: 520px;
    width: 100%;
    position: absolute;
    background: rgb(24,24,24);
    background: linear-gradient(180deg, rgba(24,24,24,0) 25%, rgba(24,24,24,1) 100%);
`

export const TopContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px 72px;
    color: white;
    position: absolute;

    p{
        font-size: 2.5rem;
        font-weight: bold;
        width: 1000%;
        height: 100%;
        text-aling: center;
    }
`
export const CarouselButtons = styled.div`
    width: 100px;
    height: 100%;
    background-color: blue;
    padding: 12px;
`
