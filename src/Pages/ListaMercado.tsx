
import { Fragment } from "react/jsx-runtime";
import Lista from "../components/Lista";

// 4. Utilize props para enviar informações a outros componentes

export function ListaMercado(){
    return (
  <Fragment>
    <h1>Lista de compras mercado</h1>
    <Lista/>
  </Fragment>
);
}