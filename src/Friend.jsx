export default function Friend({friend}){
    // console.log(friend)
    const {name, email, website} = friend
    const friendStyle = {
        border: '2px solid red',
        display: 'flex',
        marginBottom:'10px',
        borderRadius: '20px',
        textAlign: 'center',
    }
    return (
        <div style={friendStyle}>
            <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Web Site: {website}</p>
            </div>
        </div>
    )
}