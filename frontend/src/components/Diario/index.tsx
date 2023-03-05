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
            <Card title="Hoje é dia" content="testando aplicação"/>


        </ContainerD>
    )
}