import {Link} from "react-router-dom"

export default function Homepage(){
    return (
        <div>
            <p>Homepage</p>
            <Link to="about">About</Link>
        </div>
    )
}