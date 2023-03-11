import styled from "styled-components";



export const HeaderContainer=styled.header`
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  




    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    padding:1rem;
    background: ${props=>props.theme.colors.primary};
        input{
    height:2rem;
    background: transparent;
    }
    h1{
        background: transparent;
    }
    svg{
        background: transparent;
    }
    div{
        display:flex;
        justify-content: center;
        background: transparent;
        a{
            display:flex;
            align-items:center;
            background: transparent;
            text-decoration:none;

        img{
            height:2rem;   
            background: transparent;     
        }
        }
        
    }
    .toggle{
        background:transparent;
        border: 0;
    }
    button{
        cursor:pointer;
        background: transparent;
    }
    
    @media only screen and (max-width: 600px) {
    display:flex;
    align-items: center;
    height: auto;
    padding: 0.5rem;
    input {
      width: 30%;
      
      background: transparent;
    }
    div {
        display:flex;
        justify-content: center;
    
      a{
        
        h1{
            font-size:1rem
        }
      }
    }
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
    @media only screen and (max-width: 600px) {
        display:flex;
        aling-items:center;
  }
    
`
export const HeaderHome=styled.div`
    display:flex;
    aling-items:center;
    gap:0.5rem;
    .login{
        margin-left:0.5rem;
        border:2px solid ${props=>props.theme.colors.title};
        padding:0.5rem;
        border-radius:0.5rem;
        background: transparent;
        trasition:all 0.2s
    }
    .login:hover{
        border:2px solid transparent;
        color:white;
        background: ${props=>props.theme.colors.button};
        trasition:all 0.2s
    }
    @media only screen and (max-width: 600px) {
        display:flex;
        aling-items:center;
  }

`
