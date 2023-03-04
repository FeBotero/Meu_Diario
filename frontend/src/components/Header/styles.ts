import styled from "styled-components";

export const HeaderContainer=styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    background-color: (rose)

    input{
        height:2rem
    }
    
`
export const Profile=styled.div`
    display:flex;
    gap:0.5rem;

    button{
        background:transparent;
        border:none;
        cursor:pointer;
    }

    img{
        height:3rem
    }
`