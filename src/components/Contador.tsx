import { useState } from "react";

export default function Contador() {
    let [contador, setContador] = useState(0);

    function incrementa() {
        setContador(contador+1);
        console.log("contador", contador);
    }

    return (
        <>
            <input value={contador}></input>
            <button onClick={incrementa}>+</button>
        </>
    )

}