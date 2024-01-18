import styled from "styled-components";

export const Profile_Style = styled.section`

    .cover{
        width: 100%;
        height: 30rem;
        background-color: red;
        
        & > div{
            position: relative;
            height: 100%;

            .user{
                position: absolute;
                left: 0;
                bottom: -6rem;
                display: flex;
                align-items: center;
                gap: 2.5rem;

                .image-profile{
                    width: 20rem;
                    height: 20rem;
                    border-radius: 20rem;
                    background-color: green;
                    border: .8rem solid var(--Black2);

                    background-position: center;
                    background-size: 100% 100%;
                }

                h2{
                    padding: 1rem 2rem;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 1rem;
                }
            }
        }
    }
`;