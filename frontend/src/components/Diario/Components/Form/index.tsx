import { useContext, useState,useEffect } from "react"
import { FormContainer } from "./styles";
import { apiService } from "../../../../api/api";
import { Tpost } from "../../../../types/types";
import { UserContext } from "../../../../context/UserContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
            if(payload.content==""){
                toast.error("Favor verificar o conteúdo da mensagem.", {
                    position: toast.POSITION.TOP_RIGHT
                }) 
            }else{
                const request = await apiService.post.createURL(payload)
                const data = request.data

                if(request.status==400){
                    toast.error(data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    }) 
                }else{
                    
                    toast.success(data.message, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                } 
                refreshPost()
                setContentPost("")

            }
            
          
            
            
            
                      
            
       
         
    }
    

    return(
        <FormContainer>
            
            <textarea id="text"placeholder="Três motivos para agradecer" value ={contentPost} onChange={e=>setContentPost(e.target.value)}/>
            <div className="div">
            <button onClick={postDiary}>Salvar</button>
            </div>
                <ToastContainer/>
        </FormContainer>
    )
}