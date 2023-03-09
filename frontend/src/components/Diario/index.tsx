import { useContext, useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD } from "./styles";
import { dateContext } from "../../context/DateContext";
import { apiService } from "../../api/api";
import { Tpost } from "../../types/types";


export function Diary(){
    const { date } = useContext(dateContext);
    const [posts,setPosts]=useState<Tpost[]>([])
    
    const payload={
        author:"640930a8f401801ce18d19b7",
        date:Intl.DateTimeFormat('pt-BR').format(date)
    }

    async function getPostUser(){
        Intl.DateTimeFormat('pt-BR').format(date)
        const request = await apiService.post.readByUserID(payload)
        
        if(request.status!=200){
            alert("Zebrou")
            
        }setPosts(request.data)
    }
    console.log(date)
    const now= new Date()
    const todayYear = now.getFullYear()
    const todayMonth = now.getMonth()
    const todayDay = now.getDay()
    const dateYear = date.getFullYear()
    const dateMonth = date.getMonth()
    const dateDay = date.getDay()

    



    useEffect(()=>{
        getPostUser()
    },[])

    return(
        <ContainerD>
            {/* {todayYear==dateYear &&todayMonth==dateMonth&&todayDay==dateDay?<Form refreshPost={getPostUser}/>:""} */}
            <h1>Diário de {date? date.toLocaleDateString():""}</h1>
            {
                posts.map((post:Tpost,index:number)=>(
                    <Card key={`${post.author}${index}`} content={post.content} refreshPost={getPostUser}/>
                ))
            }
            


        </ContainerD>
    )
}