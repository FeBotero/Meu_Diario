import { apiService } from "../../../../api/api";
import { CardConteiner, Title } from "./styles";
import { Trash} from "@phosphor-icons/react";
import { dateContext } from "../../../../context/DateContext"
import { useContext } from "react";

export interface Icard{
    content:string
}

export function Card({content,idPost,refreshPost}:any){
    const { date } = useContext(dateContext);


    async function deletePost() {
        
        await apiService.post.deleteURL(idPost)
        refreshPost()
    }
    const getToday = new Date()
    const today = JSON.stringify(Intl.DateTimeFormat('pt-BR').format(getToday))
    const newDate = JSON.stringify(Intl.DateTimeFormat('pt-BR').format(date))

    

    return(
        <CardConteiner>
            <Title>
            {newDate===today?<button onClick={deletePost}><Trash size={25}  /></button>:""}
            </Title>
            <p>{content}</p>
        </CardConteiner>
    )
}