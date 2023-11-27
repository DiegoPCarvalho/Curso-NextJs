export function getStaticPaths() {
    return {
        fallback: false, // 404
        paths: [
            {params: {id: '101'}},
            {params: {id: '205'}},
            {params: {id: '307'}},
        ]
    }
}

export async function getStaticProps(context: any) {
    const dado = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await dado.json()
    
    return {
        props: { aluno }
    }
}

export default function AlunoPorId(props: any) {

    const { aluno } = props

    return (
        <div>
            <h1>Detalhes de Aluno</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}