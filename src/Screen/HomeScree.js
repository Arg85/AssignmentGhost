import React from 'react'
import {Link} from 'react-router-dom'
function HomeScree() {
    return (
        <div>
            <h1> Home Screen</h1>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",border:"1px solid black",boxShadow:"2px 2px 2px 2px black"}}>
    <h2>  <Link to="/Dashboard">Dashboard</Link>  </h2>
           <h2>  <Link to="/Posts">Posts</Link>  </h2>
            <h2>  <Link to="/Links">Links</Link> </h2>
    </div>
        </div>
    )
}

export default HomeScree
