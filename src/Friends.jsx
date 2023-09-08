import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => setFriends(data))
    },[])
    // console.log(friends);
    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/**
 *  1. declare a state to hold the data
 *  2. useEffects with call back function and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
*/