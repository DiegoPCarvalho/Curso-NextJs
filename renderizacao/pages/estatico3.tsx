export function getStaticProps(){
    return {
        props : {
            numero: Math.random()
        },
        revalidate: 7
    }
}

export default function Estatico3(props: any){

    return (
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}