
import { Diary } from "../../components/Diario";
import { DiarioContainer } from "./styles";

import { useNavigate } from "react-router-dom"


export function Diario(){
    const navigate=useNavigate()

    // if(!user){
    //     navigate("/")
    // }
   
    

    return(
        
        
        <DiarioContainer>
            <Diary />

        </DiarioContainer>

       
    )
}