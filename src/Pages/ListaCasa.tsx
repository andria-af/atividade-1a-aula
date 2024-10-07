import { Fragment } from "react/jsx-runtime";
import { Tabela } from "../components/Tabela";

export function ListaCasa(){
    return (
        <Fragment>
             <h1>Lista de compras Casa</h1>
             <Tabela
        titleCol1="Item"
        titleCol2="Quantidade"
        tableBody={[
            {
                itemCol1: 'Toalhas',
                itemCol2: '5 unidades',
            },
            {
                itemCol1: 'Balde',
                itemCol2: '2 unidades',
            },
            {
                itemCol1: 'Pratos',
                itemCol2: '6 unidades',
            },
        ]}
      />
        </Fragment>
    )    
}