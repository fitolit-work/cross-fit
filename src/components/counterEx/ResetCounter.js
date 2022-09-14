export default function ResetCounter({resetCounter}){
    const redStyle = {background: 'red'}
    return (
        <button onClick={resetCounter} style={redStyle}>reset</button>
    )
}