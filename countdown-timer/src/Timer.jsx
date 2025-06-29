export const Timer=()=>{
    
    return (
        <div className="container">
            <div className="timer-countdown">
            <div>
                <h3>Days</h3>
                <p>{time}</p>
            </div>
            <div>
                <h3>Hours</h3>
                <p>{time}</p>
            </div>
            <div>
                <h3>Minutes</h3>
                <p>{time}</p>
            </div>
            <div>
                <h3>Seconds</h3>
                <p>{time}</p>
            </div>
            </div>

        </div>
    )
}