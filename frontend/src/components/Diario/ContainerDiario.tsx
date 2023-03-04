import { Card } from "./Components/Card/Card";
import { Form } from "./Components/Form/Form";
import { ContainerD } from "./styles";

export function ContainerDiario(){
    return(
        <ContainerD>
            <Form/>
            <Card title="Hoje é dia" content="testando aplicação"/>


        </ContainerD>
    )
}