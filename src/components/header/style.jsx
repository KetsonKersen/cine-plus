import {styled} from "styled-components";

export const Header_Style = styled.header`
    width: 100%;
    height: 8rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    & > div{
        .container-btn-header{
            display: flex;
            gap: 1rem;
        }
        .container-search-user{
            display: flex;
            gap: 1rem;
            
            label{
                padding: 0;
                padding-left: 2rem;
                
                button{

                    padding: 1rem 2rem;
                }
            }
        }
    }
`;