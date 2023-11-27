export default function jsx2() {
    const array = [
        <li>Paulo</li>,
        <li>Diego</li>,
        <li>Ana</li>,
        <li>Pedro</li>
    ]

    const conteudo = (
        <div>
            <h1>JSX #2</h1>
            <h2>{array}</h2>
        </div>
    )

    return conteudo
}