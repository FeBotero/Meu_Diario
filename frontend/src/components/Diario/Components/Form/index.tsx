import { useContext, useState,useEffect } from "react"
import { FormContainer } from "./styles";
import { apiService } from "../../../../api/api";
import { Tpost } from "../../../../types/types";
import { UserContext } from "../../../../context/UserContext"

export function Form({refreshPost}:any){
    const [contentPost,setContentPost]=useState<string>()
    const date = new Date()
    const{user}:any = useContext(UserContext)

    const payload:Tpost={
        author:user,
        content:contentPost ??"",
        createdAt:Intl.DateTimeFormat('pt-BR').format(date)

    }

    async function postDiary(){
        
         await apiService.post.createURL(payload)

         refreshPost()
        document.getElementById("text").value=""
    }
    

    return(
        <FormContainer>
            
            <textarea id="text"placeholder="Três motivos para agradecer" onChange={e=>setContentPost(e.target.value)}/>
            <div>
            <button onClick={postDiary}>Salvar</button>
                </div>
        </FormContainer>
    )
}