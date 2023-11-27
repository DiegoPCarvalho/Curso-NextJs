export async function getServerSideProps(){
    const produtos = await fetch('http://localhost:3000/api/produtos')
        .then(resp => resp.json())
    
    return {
        props : {
           produtos: produtos
        },
        
    }
}

export default function Estatico4(props: any){
    function renderizarProdutos(){
        return props.produtos.map((produto: any) => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.name} tem preco de R$ {produto.price}</li>
            )
        })
    }

    return (
        <div>
            <h1>Dinamico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}