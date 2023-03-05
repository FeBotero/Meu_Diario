import { CardConteiner, Title } from "./styles";

export interface Icard{
    title?:string;
    content?:string
}

export function Card({title,content}:Icard){
    return(
        <CardConteiner>
            <Title>
                <h2>{title}</h2>
                <span>03/03/23 às 22:00</span>
            </Title>
            <p>{content}</p>
        </CardConteiner>
    )
}