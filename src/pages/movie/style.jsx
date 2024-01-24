import styled from "styled-components";

export const Movie_Style = styled.section`
    padding-bottom: 20rem;
    .bg-movie{
        width: 100%;
        height: 70rem;
        background-position: 50% 20%;
        background-size: 100% auto;
        position: relative;
        z-index: 0;
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(12,12,12);
            background: linear-gradient(0deg, rgba(12,12,12,1) 1%, rgba(12,12,12,0) 100%);  
        }
        & > div{
            margin-top: -18rem;
            z-index: 2;

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
        }
    }
    .container{
       gap: 2rem;
       margin-top: -26rem;
       position: relative;

        h3{
            font-size: 2.8rem;
            font-weight: 700;
        }
        .trailer{
            width: 100%;
            height: 52rem;
            background-color: white;
            border-radius: 1rem;
            margin-bottom: 5rem;
            overflow: hidden;
        }
        .container-person{
            width: 100%;
            height: 30rem;
            background-color: white;
            position: relative;
            overflow: hidden;
            .content-perseon{
                width:fit-content;
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
            }
            .card-person{
                width: 20rem;
                height: 30rem;
                background-position: center;
                background-size: 100% 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                text-align: center;
            }
        }
    }
`;