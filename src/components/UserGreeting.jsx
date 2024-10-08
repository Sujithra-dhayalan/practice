{/*2. this file tells about the conditional rendering*/ }

//  use this in app.js file
// <UserGreeting isLoggedIn={true} username={"Sujithra"} />

function UserGreeting(props) {
    return (
        props.isLoggedIn ? <h2>Welcome to {props.username}</h2> : <h2>Please log in to continue</h2>
    )
}

export default UserGreeting