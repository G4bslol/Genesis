import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    

    background-color: rgba(0, 0, 0, 0.15);
    
    `

export const CaixaCircles = styled.div`

    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    flex-direction: column-reverse;
    margin-top: 50px;
    width: 450px;
    height: 700px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 20px;

`

export const Circle1 = styled.div`

    width: 100px;
    height: 100px;
    border-radius:100%;
    position: relative;
    background-color: rgb(0, 255, 0);
    opacity: 0.25;

    animation-name: cemafaro;
    animation-delay: 5s;
    animation-duration: 5s;


    @keyframes cemafaro {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 5;
    }
}


    
`

export const Circle2 = styled.div`

width: 100px;
    height: 100px;
    border-radius:100%;
    position: relative;
    background-color: yellow;
    opacity: 0.25;

    animation-name: cemafaro;
    animation-delay: 10s;
    animation-duration: 3s;


    @keyframes cemafaro {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 5;
    }
    }
`

export const Circle3 = styled.div`

width: 100px;
    height: 100px;
    border-radius:100%;
    position: relative;
    background-color: red;
    opacity: 0.25;

    animation-name: cemafaro;
    animation-duration: 5s;


    @keyframes cemafaro {
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 5;
    }
}

`