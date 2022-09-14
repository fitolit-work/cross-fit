import ExCounter from "./ExCounter";
import ButtonExCounter from "./ButtonExCounter";
import ResetCounter from "./ResetCounter";


export default function CompletedCounter({completed, incrementCompleted, resetCounter}) {
    return (
        <div className="completedCounter">
            <ExCounter completed={completed}/>
            <ButtonExCounter incrementCompleted={incrementCompleted} buttonText='Completed +1'/>

            {completed > 0 && <ResetCounter resetCounter={resetCounter}/>}

        </div>
    )
}