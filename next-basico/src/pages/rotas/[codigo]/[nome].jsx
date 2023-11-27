import { useRouter } from "next/router"
import Link from 'next/link'

export default function Buscar() {
    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome

    return (
        <div>
            <div>
                Rotas / {codigo} / {nome}
            </div>
            <div>
                <Link href="/rotas">
                    <button>Voltar</button>
                </Link>
            </div>
        </div>
    )
}