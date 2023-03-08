import { useContext } from "react";
import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD } from "./styles";
import { dateContext } from "../../context/DateContext";


export function Diary(){
    const { date } = useContext(dateContext);
    
    

    return(
        <ContainerD>
            <Form/>
            <h1>Diário de {date? date.toLocaleDateString():""}</h1>
            <Card  content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae soluta quaerat, harum iste aliquam qui laudantium odio dolore, nemo repudiandae nostrum magnam! Minima tenetur doloribus laboriosam placeat rerum harum."/>


        </ContainerD>
    )
}