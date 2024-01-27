import styled from "styled-components";
export const GidMovie_Style = styled.section`
    .container-order{
        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            padding: .5rem 2rem;
            border-radius: .5rem;
            background-color: var(--Gray1);
            font-size: 1.6rem;
        }
    }

    .container-grid{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8rem 1rem;
        padding: 8rem 0;
    }
`;