import { Fragment } from "react/jsx-runtime";
import { Tabela } from "../components/Tabela";

export function ListaFarmacia(){
    return (
        <Fragment>
             <h1>Lista de compras Farmacia</h1>
             <Tabela
            titleCol1="Item"
            titleCol2="Quantidade"
            tableBody={[
                {
                    itemCol1: 'Lenço umidecido',
                    itemCol2: '5 unidades',
                },
                {
                    itemCol1: 'Escova de dente',
                    itemCol2: '2 unidades',
                },
                {
                    itemCol1: 'Remédio dor de cabeça',
                    itemCol2: '3 unidades',
                },
            ]}
        />
        </Fragment>
    )   
}