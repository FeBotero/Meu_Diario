import styled from "styled-components";

export const CardConteiner=styled.div`
    display:flex;
    flex-direction:column;
    background-color:${props=>props.theme.colors.secundary};
    width:30%;
    margin-top:0.5rem;
    padding:0.5rem;
    border-radius:0.5rem;

    p{
        display: flex;
        font-weight:light;
        font-size:large;
        text-align: justify;
        text-justify: inter-word;
        padding:0.5rem;
        background:transparent;
    }

    @media only screen and (max-width: 768px) {
        width:80%;

}

`
export const Title=styled.div`
    display:flex;
    justify-content: flex-end;
    gap:0.5rem;
    font-weight:bold;
`