import CompletedCounter from "./CompletedCounter";
import {useState} from "react";

export default function ExerciseProLevel({data, storageId}) {
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-pro')) {
        compleatedStartCount = localStorage.getItem(storageId + '-pro')
    } else {
        localStorage.setItem(storageId + '-pro', '0');
    }

    const [completed, setCompleted] = useState(compleatedStartCount)

    const incrementCompleted = () => {
        setCompleted(+completed + 1)
        localStorage.setItem(storageId + '-pro', +completed + 1)
    }
    const resetCompletedCounter = () => {
        setCompleted(0)
        localStorage.setItem(storageId + '-pro', 0)
    }

    return (
        <div className="proLevel">
            <p className="proDescription">{data.description}</p>
            <ul className="proExerciseList">
                {data.exercises.map((ex, i) => (
                    <li className="proExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="proGenders">
                {data.genders.map((gender, i) => (
                    <span key={i}>{gender.gender} {gender.weight} {gender.unit} </span>
                ))}
            </p>
            <p className="proAdditionally">{data.additionally}</p>

            <CompletedCounter
                completed={completed}
                incrementCompleted={incrementCompleted}
                resetCounter={resetCompletedCounter}
            />
            <hr/>
        </div>
    )
}