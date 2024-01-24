import styled from "styled-components";
export const CardMovie_Style = styled.div`
    width: 100%;
    height: 30rem;
    position: relative;

    .content-card{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background-color: var(--Black1);
        cursor: pointer;
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        transition: .2s ease;
        position: relative;
    }
    p,h4{
        z-index: -1;
        transition: .2s ease;
        opacity: 0;
        text-align: center;
        position: absolute;
    }
    p{
        display: flex;
        align-items: center;
        gap: 1rem;
        top: 0rem;
        transform: translate(0 , 0%);
    }
    h4{
        transform: translate(0 , 0);
        bottom: 0rem;
    }
    
    &:hover{
        transform: scale(98%);
        p{  
            top: -2rem;
            transform: translate(0 , -100%);
            opacity: 1;
        }
        h4{

            bottom: -2rem;
            transform: translate(0 , 100%);
            opacity: 1;
        }
        span{
            transform: scaleY(100%) translate(0 , 0);
            transition: .2s ease;
            opacity: 1;
        }
    }

    .btn-favorite{
        width: 3.5rem;
        height: 3.5rem;
        background-color: var(--Color);
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    span{
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scaleY(0%) translate(0 , 200%);
        background-color: red;
        color: white;
        font-weight: 600;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        padding: 1rem;
        opacity: 0;
        transition: .3s ease;
    }
`;