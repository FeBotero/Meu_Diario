import { FormContainer } from "./styles";

export function Form(){
    return(
        <FormContainer>
            <input type="text" placeholder="Titúlo"/>
            <textarea placeholder="Três motivos para agradecer"/>
            <button>Salvar</button>
        </FormContainer>
    )
}