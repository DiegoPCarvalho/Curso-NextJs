import Link from 'next/link'
import router from 'next/router'

export default function Rotas() {

    function navegacaoSimples(url){
        router.push(url)
    }

    function navegacaoComParam(){
        router.push({
            pathname: "rotas/params",
            query: {
                id: 125,
                nome: "Mona"
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>

            <ul>
                <Link href="/rotas/params?id=17&nome=Mona">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/158/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/158/Julia">
                    <li>Nome</li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={() => router.push("/rotas/555/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/555/David")}>Nome</button>
                <button onClick={() => navegacaoComParam()}>Params</button>
            </div>
        </div>
    )
}