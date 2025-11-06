//Para forçar a ter props -> precisa definir o tipo da prop como HelloProps
// type HelloProps = { 
//     nome: string;
// }

export default function Hello({nome}:any) {    //1a opcao: nome="visitante" 

    /* 2a opcao
    if(!nome) { 
        nome= "Visitante";
    }*/

    return ( 
        (nome)
            ? <h3>Olá {nome}!</h3>
            : <h3>Olá visitante!</h3>
     )
}