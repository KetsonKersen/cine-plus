import styled from "styled-components";

export const Filter_Style = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .categories{
        ul{
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 900;
            position: relative;

            li{
                padding: .5rem 2rem;
                border-right: 1px solid var(--Gray2);
                cursor: pointer;
            }
            li:first-of-type{
                padding-left: 0;
            }
            li:last-of-type{
                border-right: none;
            }

            li.active{
                color: var(--Color);
            }
            .mark-filter{
                width: 4rem;
                height: .6rem;
                background-color: red;
                border-radius: 6rem;
                box-shadow: 0 0 12px 2px red;
                transform: translate(-50% , 0);
                position: absolute;
                bottom: -.6rem;
                left: 60px;
            }
        }
    }
    .filters{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid var(--Gray2);
        padding: 2rem 0; 

        ul{
            display: flex;
            gap: 1rem;
            font-size: 1.4rem;
            color: gray;

            li{
                padding: .5rem 2rem;
                border: 1px solid var(--Gray1);
                border-radius: .5rem;
                cursor: pointer;
            }
        }
        button{
            padding: .5rem 2rem;
            background-color: white;
            color: black;
            border-radius: .5rem;
        }
    }
`;