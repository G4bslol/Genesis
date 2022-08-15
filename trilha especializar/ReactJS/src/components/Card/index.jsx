import './styles.css'

export function Card({ name, time }) {
    return(
        <>
            <div className="card">
                <strong id="card_name">{name}</strong>
                <small id="card_time">{time}</small>
            </div>    
        </>
    )
}