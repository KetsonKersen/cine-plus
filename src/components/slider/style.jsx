import styled from "styled-components";

export const Slider_Style = styled.div`
    width: 100%;
    height: 80vh;
    background-position: 50% 30%;
    background-size: 100% auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(12,12,12);
        background: linear-gradient(0deg, rgba(12,12,12,1) 1%, rgba(12,12,12,0) 80%);  
     
    }
    .content-movie{
        width: 100%;
        z-index: 10;
        font-size: 1.8rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3{
            font-size: 5rem;
            font-weight: 700;
        }
        p:last-of-type{
            max-width: 60%;
        }
        .contaienr-btn{
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            button{
                width: 20rem;
                height: 4rem;
                border-radius: 1rem;
                background-color: var(--Full-White);
                font-size: 1.6rem;
                color: var(--Black3);
                transition: .3s;

                &:hover{
                    box-shadow: 0 0 7px 2px var(--Full-White);
                    transform: scale(102%);
                }
                &:first-of-type{
                    background-color: var(--Color);
                    color: var(--Full-White);
                    &:hover{
                        box-shadow: 0 0 7px 2px var(--Color);
                    }
                }
            }
        }

    }
    button{
        width: 10rem;
        height: 100%;
        z-index: 10;
    }
`;