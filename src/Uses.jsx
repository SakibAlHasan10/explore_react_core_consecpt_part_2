import { useEffect, useState } from "react"

export default function Uses(){
    const [users, setUses] = useState([])
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUses(data))
    },[])
    return(
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )
}

/**
 *  1. declare a state to hold the data
 *  2. useEffects with call back function and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
*/