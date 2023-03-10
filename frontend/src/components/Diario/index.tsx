import { useContext, useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD } from "./styles";
import { dateContext } from "../../context/DateContext";
import { apiService } from "../../api/api";
import { Tpost } from "../../types/types";
import { UserContext } from "../../context/UserContext"

export function Diary(){
    const { date } = useContext(dateContext);
    const{user}:any = useContext(UserContext)
    const [posts,setPosts]=useState<Tpost[]>([])
    
    const payload={
        author:user,
        date:Intl.DateTimeFormat('pt-BR').format(date)
    }

    async function getPostUser(){
        Intl.DateTimeFormat('pt-BR').format(date)
        const request = await apiService.post.readByUserID(payload)
        
        if(request.status!=200){
            alert("Zebrou")
            
        }setPosts(request.data)
    }

    const newDate = JSON.stringify(Intl.DateTimeFormat('pt-BR').format(date))

    //Passado o date dentro do useEffect para atualizar sempre que a data alterar
    useEffect(()=>{
        getPostUser()
    },[date])


    return(
        <ContainerD>
            {newDate?<Form refreshPost={getPostUser}/>:""}
            <h1>Diário de {date? date.toLocaleDateString():""}</h1>
            {
                posts.map((post:Tpost,index:number)=>(
                    <Card key={`${post.author}${index}`} content={post.content} refreshPost={getPostUser}/>
                ))
            }
            


        </ContainerD>
    )
}