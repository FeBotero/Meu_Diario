import { useState } from "react";
import { FormContainer } from "./styles";
import { apiService } from "../../../../api/api";
import { Tpost } from "../../../../types/types";


export function Form({refreshPost}:any){
    const [contentPost,setContentPost]=useState<string>()
    const date = new Date()

    const payload:Tpost={
        author:"640930a8f401801ce18d19b7",
        content:contentPost ??"",
        createdAt:Intl.DateTimeFormat('pt-BR').format(date)

    }

    async function postDiary(){
        console.log(payload)
         const request = await apiService.post.createURL(payload)

         if(request.status==200){
             alert("Post realizado com sucesso!")
         }else{
             alert("Aconteceu algo de errado!")
         }
         refreshPost()
    }
    

    return(
        <FormContainer>
            
            <textarea placeholder="Três motivos para agradecer" onChange={e=>setContentPost(e.target.value)}/>
            <div>
            <button onClick={postDiary}>Salvar</button>
                </div>
        </FormContainer>
    )
}