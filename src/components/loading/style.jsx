import styled from "styled-components";
export const Loading_Style = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;

    .loadingpng{
        width: 30rem;
        height: 30rem;
        background-size: cover;
        animation: loop 3s linear infinite;
    }

    @keyframes loop {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;