import styled from "styled-components";

export const FormContainer=styled.section`
    display:flex;
    flex-direction:column;
    width:20vw;
    gap:0.2rem;
    padding-top:3rem ;

    textarea{
        resize: none;
        height:3rem;
        border-radius:0.5rem;
        padding:0.3rem;
    }

    div{
        display:flex;
        justify-content:flex-end;

        button{
        display:flex;
        justify-content:center;
        
        
        width:3rem;

    }
    }
    @media only screen and (max-width: 768px) {
        width:80%;

}
    
`