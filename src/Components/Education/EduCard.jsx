import React from 'react'
import   "./Card.css"

function EduCard({  title, description, time}) {
    return (

        <div className="Card"
        style={{}}>
            <div>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h4>{time}</h4>
               

            </div>
        </div>
    )
}

export default EduCard;
