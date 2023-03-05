import { useState } from "react";
import { FormContainer } from "./styles";
import { Icard } from "../Card";

export function Form(){
    const [content,setContent]=useState<Icard>()

    return(
        <FormContainer>
            <input type="text" placeholder="Titúlo" onChange={e=>setContent}/>
            <textarea placeholder="Três motivos para agradecer"/>
            <button>Salvar</button>
        </FormContainer>
    )
}