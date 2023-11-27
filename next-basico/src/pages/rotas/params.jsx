import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Rotas(){
const router = useRouter()

const id = router.query.id
const nome = router.query.nome

    return(
     <div>
         Rotas Params:
         <div>
            {nome} - nome
            <br />
            e <br />
            {id} - id
         </div>
         <div>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
         </div>
     </div>
    ) 
}