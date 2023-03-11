import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../api/api";

import { UserContext } from "../../context/UserContext"
import { dateContext } from "../../context/DateContext";

import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD, ContainerF } from "./styles";

import { Tpost } from "../../types/types";




export function Diary(){
    const { date } = useContext(dateContext);
    const{user,setUser}:any = useContext(UserContext)
    const [posts,setPosts]=useState<Tpost[]>([])
    
    const payload={
        author:user,
        date:Intl.DateTimeFormat('pt-BR').format(date)?Intl.DateTimeFormat('pt-BR').format(date):Intl.DateTimeFormat('pt-BR').format(new Date())
    }
    const navigate = useNavigate()

    async function getPostUser(){
        if(user){
            Intl.DateTimeFormat('pt-BR').format(date)
        const request = await apiService.post.readByUserID(payload)
        
        if(request.status!=200){
            alert("Zebrou")
            
        }setPosts(request.data)
        }else{
            
        }
    }
    const getToday = new Date()
    const today = JSON.stringify(Intl.DateTimeFormat('pt-BR').format(getToday))

    const newDate = JSON.stringify(Intl.DateTimeFormat('pt-BR').format(date))
    function getUser(){
        const info:any = localStorage.getItem("user")!=""?localStorage.getItem("user"):""
        const userInfo = JSON.parse(info)
        
        if(userInfo){
            setUser(userInfo.id)
        }else{
            setUser()
            navigate("/")
        }
    }



    //Passado o date dentro do useEffect para atualizar sempre que a data alterar
    useEffect(()=>{
        getPostUser()
        
    },[date])

    useEffect(()=>{
        getUser()
        
    },[])
    
    return(
        <ContainerD>
            
             {newDate===today?<Form refreshPost={getPostUser}/>:<ContainerF>""</ContainerF>}
            
            
            <h1>Diário de {date? date.toLocaleDateString():""}</h1>
            {
                posts.map((post:Tpost,index:number)=>(
                    <Card key={`${post.author}${index}`} content={post.content} idPost={post._id} refreshPost={getPostUser}/>
                ))
            }
            


        </ContainerD>
    )
}