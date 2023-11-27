import listaProdutos from "@/data/listaProdutos"

export default function repetiocao2(){
    function renderizarLinhas(){
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    const comBorda ={
        border: "1px solid #fff", 
    }

    return (
        <div>
            <h1>Codigo Nome Preco</h1>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}