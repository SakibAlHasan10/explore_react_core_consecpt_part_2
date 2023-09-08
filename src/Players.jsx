import { useState } from "react"

export default function Players () {
    const [count, setCount] = useState(0);
    const handelCount = () =>{
        const newCount = count+1;
        setCount(newCount)
    }
    const handelReduce = () =>{
        const newCount = count -1;
        setCount(newCount)
    }
    const teamStyle= {
        border: '2px solid yellow',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {count}</h3>
            <button onClick={handelCount}>add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}