import styled from "styled-components";



export const HeaderContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:3rem;
    padding:1rem;
    input{
    height:2rem;
    }
    div{
        a{
            display:flex;
            align-items:center;
            
            text-decoration:none;

        img{
            height:2rem;        
        }
        }
        
    }
    .toggle{
        background:transparent;
        border: 0;
    }
    button{
        cursor:pointer
    }
    
    @media only screen and (max-width: 600px) {
    
    height: auto;
    padding: 0.5rem;
    input {
      width: 30%;
      margin-bottom: 0.5rem;
    }
    div {
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
    @media only screen and (max-width: 600px) {
        display:flex;
        aling-items:center;
  }

`
