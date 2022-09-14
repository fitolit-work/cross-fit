import CompletedCounter from "./counterEx/CompletedCounter";
import {useState} from "react";

export default function ExerciseIntermediateLevel({data, storageId}) {
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-intermediate')) {
        compleatedStartCount = localStorage.getItem(storageId + '-intermediate')
    } else {
        localStorage.setItem(storageId + '-intermediate', '0');
    }

    const [completed, setCompleted] = useState(compleatedStartCount)

    const incrementCompleted = () => {
        setCompleted(+completed + 1)
        localStorage.setItem(storageId + '-intermediate', +completed + 1)
    }
    const resetCompletedCounter = () => {
        setCompleted(0)
        localStorage.setItem(storageId + '-intermediate', 0)
    }


    return(
        <div className="intermediateLevel">
            <h3 className="intermediateTitle">{data.intermediateOptionTitle}</h3>
            <p className="intermediateDescription">{data.intermediateDescription}</p>
            <ul className="intermediateExerciseList">
                {data.intermediateExercises.map((ex, i) => (
                    <li className="intermediateExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="intermediateGenders">
                {data.intermediateGenders.map((gender, i) => (
                    <span key={i}>{gender.gender} {gender.weight} {gender.unit} </span>
                ))}
            </p>

            <CompletedCounter
                completed={completed}
                incrementCompleted={incrementCompleted}
                resetCounter={resetCompletedCounter}
            />

            <hr/>



        </div>
    )
}
