import { useState } from "react";

export default function FavoriteColor() {
    let [cor, setCor] = useState('blue');

    function alteraCor() {
        if(cor == 'blue'){
            setCor('red');
        }
        else {
            setCor('blue')
        }
    }
    return(
        <button style={{backgroundColor: cor, color: 'white'}}
            onClick={alteraCor}>
            {cor}
        </button>
    );
}