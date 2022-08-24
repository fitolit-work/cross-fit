import Day from "./Day";

export default function Days({data}) {
    return (
        data.map((day, i) => (
            <Day data={day} key={i}/>
        )))
}