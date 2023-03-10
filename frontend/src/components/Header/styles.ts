import styled from "styled-components";



export const HeaderContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    background-color: (rose);

    input{
        height:2rem;
    }
    div{
        display:flex;
        align-items:center;
        padding:1rem;

        img{
            height:2rem;        
        }
    }
    .toggle{
        background:transparent;
        border: 0;
    }
    button{
        cursor:pointer
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

export const HeaderUser = styled.div`
    display:flex;
    justify-content:space-between;
    
`
export const HeaderHome=styled.div`
    gap:0.5rem;
    .login{
        margin-left:0.5rem
        border:2px solid purple;
        padding:0.5rem;
        border-radius:0.5rem;
        background: transparent;
        trasition:all 0.2s
    }
    .login:hover{
        border:2px solid transparent;
        color:white;
        background: purple;
        trasition:all 0.2s
    }

`