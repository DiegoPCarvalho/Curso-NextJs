export default function jsx4(){
    const a = 4
    const subtitulo = "Estou no JavaScript"
    return (
        <div>
            <h1>JSX #0{a}</h1>
            <h1>Integrando JS com JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
        </div>
    )
}