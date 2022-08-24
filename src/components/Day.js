import ExerciseProLevel from "./ExerciseProLevel";
import ExerciseIntermediateLevel from "./ExerciseIntermediateLevel";
import ExerciseBeginnerLevel from "./ExerciseBeginnerLevel";
import StarRating from "./starRating/StarRating";
import Login from "./searchForm/Login";

export default function Day({data}) {
    return (
        <>
            <Login/>
            <div className={'trainingDay'}>

                <div className="imgBlock">
                    <img src={data.imgPath} alt={data.imgAlt}/>
                </div>

                <div className="exerciseBlock">
                    <h2>{data.name}</h2>
                    <StarRating/>

                    <ExerciseProLevel data={data.proLevel} storageId={data.id}/>
                    <ExerciseIntermediateLevel data={data.intermediateLevel} storageId={data.id}/>
                    <ExerciseBeginnerLevel data={data.beginnerLevel} storageId={data.id}/>

                </div>
            </div>
        </>
    )
}

