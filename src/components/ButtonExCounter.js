export default function ButtonExCounter({incrementCompleted, buttonText}) {
    return (
        <button onClick={() => incrementCompleted()}>{buttonText}</button>
    )
}