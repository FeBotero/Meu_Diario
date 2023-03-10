import styled from "styled-components";

export const Container = styled.div`
    background-color:#ECECEC;
    display:flex;
    justify-content:center;
    height:100vh;
    align-items:center;
    

    img{
        margin-top:-10rem;
        height:30rem
    }


    @media only screen and (max-width: 768px) {
    h2 {
      
      margin-top: 2rem;
      text-align: center;
    }
    div{
        height:65%;
        margin-inline:0.5rem;
    }

}




`
export const content=styled.div`
margin-top:-10rem;
    height:40%;
    
    background:white;
    padding:1rem;
    border-radius:1rem
`
export const Header=styled.div`
       padding:0.5rem;
    border-radius: 2rem 2rem  0 0 ;

    h2{
        color:#851d86
    }
`
export const Form=styled.div`
        display: flex;
        flex-direction:column;
        margin-top:1rem;
        align-items:center;
    form{
        display:flex;
        flex-direction:column;
        gap:0.5rem;
    }
    button{
        padding:0.5rem;
        background-color:white;
        border:1px solid purple;
        color:purple;
        border-radius:0.5rem;
        cursor:pointer;
        transition:all 0.5s
    }
    button:hover{
     
        border:1px solid transparent;
        background-color:purple;
        color:white;
        transition:all 0.5s
    }


    div{
        background-color:#ECECEC;
        width:18rem;
        height:2.5rem;
        border-radius:0.5rem
        
    }
    input{
        background:transparent;
        padding:0.3rem;
        width: 100%;
        font-size:large;
        border:0;
        outline:0;
    }
`
