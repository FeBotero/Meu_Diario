import { Card } from "./Components/Card";
import { Form } from "./Components/Form";
import { ContainerD } from "./styles";

export function ContainerDiario(){
    return(
        <ContainerD>
            <Form/>
            <Card title="Hoje é dia" content="testando aplicação"/>


        </ContainerD>
    )
}