import './styles.css'

export type CardProps = {
    name: string | undefined;
    time: string;
}

export function Card(props: CardProps) {
    return(
        <>
            <div className="card">
                <strong id="card_name">{props.name}</strong>
                <small id="card_time">{props.time}</small>
            </div>    
        </>
    )
}