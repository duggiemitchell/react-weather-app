import React from 'react'

function Location(props) {
    return (
        <div className="user-location">
            <h1>{props.location}</h1>
        </div>
    )
}

export default Location