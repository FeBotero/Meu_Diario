import { CardConteiner, Title } from "./styles";

export interface Icard{
    content:string
}

export function Card({content}:Icard){
    return(
        <CardConteiner>
            <Title>
                
                <span>03/03/23 às 22:00</span>
            </Title>
            <p>{content}</p>
        </CardConteiner>
    )
}