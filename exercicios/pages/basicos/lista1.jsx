function gerarLista(final = 10) {
    const list = []

    for (let i = 1; i <= final; i++) {
        list.push(<span>{i},</span>)
    }

    return list
}

export default function lista() {
    return (
        <div>

            <div>
                {gerarLista(3)}
            </div>
            <div>
                {gerarLista(20)}
            </div>
        </div>
    )
}
