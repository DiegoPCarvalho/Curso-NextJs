import { useState } from "react"

export default function contador(){

    const [numero, setNumero] = useState(0)
  
    const acr = () => setNumero(numero + 1)

    function dec(){ 
        setNumero(numero - 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {numero}</div>
            <button style={{
                padding: 2,
                marginLeft: 5,
                marginRight: 5
            }} onClick={dec}>-</button>
            <button style={{
                padding: 2
            }} onClick={acr}>+</button>
        </div>
    )
}