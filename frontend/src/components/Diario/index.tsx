import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD } from "./styles";

interface Props{
    day:Date|undefined
}


export function Diary(day:Props){
    const daySelect = day.day
    const exibitionDate = JSON.stringify(daySelect)

    console.log(exibitionDate)


    return(
        <ContainerD>
            <Form/>
            <p>{exibitionDate}</p>
            <Card  content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae soluta quaerat, harum iste aliquam qui laudantium odio dolore, nemo repudiandae nostrum magnam! Minima tenetur doloribus laboriosam placeat rerum harum."/>


        </ContainerD>
    )
}