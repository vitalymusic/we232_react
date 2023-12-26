export function UserCard(props){
    // props

    return (
        <div className="user">
            <h1>{props.name}</h1>
            <h2>{props.login}</h2>
            <h2>{props.email}</h2>
            <img src={props.src}/>
        </div>
    )
}