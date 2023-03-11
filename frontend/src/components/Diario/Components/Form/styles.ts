import styled from "styled-components";

export const FormContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:30vw;
    gap:0.2rem;
    padding-top:4rem ;

    textarea{
        resize: none;
        height:3rem;
        width:23rem;
        border-radius:0.5rem;
        padding:0.3rem;
    }

    .div{
        display:flex;
        justify-content:flex-end;
        width:100%;
        button{
        display:flex;
        justify-content:center;
        padding:0.3rem;
        border-radius:0.5rem;
        width:4rem;

    }
    }
    @media only screen and (max-width: 768px) {
        width:80%;
        textarea{
        
        width:19rem;
        
    }

}
    
`