import styled from "styled-components";

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        positon:relative;
        margin-top:10rem;
        font-size:3rem;
        z-index:9999;
        color:#b79457;
        font-family: 'Shantell Sans', cursive;
        text-align: center;
    }
    img{
        margin-top:-10rem;
        width:70%;
        positon:absolute;
        
    }

    @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
      margin-top: 5rem;
      text-align: center;
    }

    img {
      width: 90%;
      margin-top: -8rem;
    }
  }

`