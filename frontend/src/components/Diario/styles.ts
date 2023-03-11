import styled from "styled-components";

export const ContainerD = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    h1{
        margin-top:1rem
    }

    
    @media only screen and (max-width: 768px) {
        h1{
            font-size:1.2rem
        }

}
`

export const ContainerF = styled.div`
    height:3rem;
`