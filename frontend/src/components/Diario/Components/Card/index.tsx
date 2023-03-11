import { apiService } from "../../../../api/api";
import { CardConteiner, Title } from "./styles";
import { Trash} from "@phosphor-icons/react";

export interface Icard{
    content:string
}

export function Card({content,idPost,refreshPost}:any){


    async function deletePost() {
        
        await apiService.post.deleteURL(idPost)
        refreshPost()
    }
    


    return(
        <CardConteiner>
            <Title>
                <button onClick={deletePost}><Trash size={25}  /></button>
            </Title>
            <p>{content}</p>
        </CardConteiner>
    )
}