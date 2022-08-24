import CompletedCounter from "./CompletedCounter";
import {useState} from "react";

export default function ExerciseBeginnerLevel({data, storageId}) {
    let compleatedStartCount = '0';
    if (localStorage.getItem(storageId + '-beginner')) {
        compleatedStartCount = localStorage.getItem(storageId + '-beginner')
    } else {
        localStorage.setItem(storageId + '-beginner', '0');
    }

    const [completed, setCompleted] = useState(compleatedStartCount)

    const incrementCompleted = () => {
        setCompleted(+completed + 1)
        localStorage.setItem(storageId + '-beginner', +completed + 1)
    }
    const resetCompletedCounter = () => {
        setCompleted(0)
        localStorage.setItem(storageId + '-beginner', 0)
    }


    return(
        <div className="beginnerLevel">
            <h3 className="beginnerTitle">{data.beginnerOptionTitle}</h3>
            <p className="beginnerDescription">{data.beginnerDescription}</p>
            <ul className="beginnerExerciseList">
                {data.beginnerExercises.map((ex, i) => (
                    <li className="beginnerExercise" key={i}>{ex.count} {ex.name}</li>
                ))}
            </ul>
            <p className="beginnerGenders">
                {data.beginnerGenders.map((gender, i) => (
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
