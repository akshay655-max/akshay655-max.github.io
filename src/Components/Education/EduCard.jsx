import React from 'react'
import   "./Card.css"

function EduCard({  title, description, time}) {
    return (
        <section id="education">
        <div className="Card"
        style={{}}>
            <div>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h4>{time}</h4>
               

            </div>
        </div>
        </section>
    )
}

export default EduCard;
